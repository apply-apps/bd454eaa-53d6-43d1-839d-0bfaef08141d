// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const initialColors = [
    { id: '1', color: 'red' },
    { id: '2', color: 'blue' },
    { id: '3', color: 'green' },
    { id: '4', color: 'yellow' }
];

const App = () => {
    const [selectedColor, setSelectedColor] = useState(initialColors[0].color);
    const [remainingColors, setRemainingColors] = useState(initialColors);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleColorPick = (color) => {
        if (color === selectedColor) {
            const newRemainingColors = remainingColors.filter(item => item.color !== color);
            setRemainingColors(newRemainingColors);

            if (newRemainingColors.length > 0) {
                setSelectedColor(newRemainingColors[0].color);
            } else {
                setShowConfetti(true);
                Alert.alert('Congratulations!', 'You have sorted all colors!');
            }
        } else {
            Alert.alert('Try Again', 'You picked the wrong color.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sort the Colors</Text>
            <Text style={styles.instruction}>Pick the {selectedColor} color</Text>
            <ColorPicker onColorPick={handleColorPick} />
            {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}
            <Button title="Reset Game" onPress={() => {
                setSelectedColor(initialColors[0].color);
                setRemainingColors(initialColors);
                setShowConfetti(false);
            }} />
        </SafeAreaView>
    );
};

const ColorPicker = ({ onColorPick }) => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    return (
        <View style={styles.colorContainer}>
            {colors.map((color) => (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorButton, { backgroundColor: color }]}
                    onPress={() => onColorPick(color)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    instruction: {
        fontSize: 24,
        marginVertical: 20,
    },
    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    colorButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 10,
    },
});

export default App;