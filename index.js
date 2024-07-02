// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const AlphabetDisplay = ({ letter }) => {
    return (
        <View style={styles.letterContainer}>
            <Text style={styles.letterText}>{letter}</Text>
        </View>
    );
};

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const handleNext = () => {
        if (currentIndex < alphabet.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alphabet for Kids</Text>
            <AlphabetDisplay letter={alphabet[currentIndex]} />
            <Button title="Next Letter" onPress={handleNext} />
        </SafeAreaView>
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
        marginBottom: 20,
    },
    letterContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letterText: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});

export default App;