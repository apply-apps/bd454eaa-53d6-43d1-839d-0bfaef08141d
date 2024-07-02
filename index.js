// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const AlphabetDisplay = ({ letter }) => {
    return (
        <View style={stylesAlph.letterContainer}>
            <Text style={stylesAlph.letter}>{letter}</Text>
        </View>
    );
};

const WordDisplay = ({ word }) => {
    return (
        <View style={stylesWord.wordContainer}>
            <Text style={stylesWord.word}>{word}</Text>
        </View>
    );
};

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showWord, setShowWord] = useState(false);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const words = {
        A: "Apple",
        B: "Ball",
        C: "Cat",
        D: "Dog",
        E: "Elephant",
        F: "Fish",
        G: "Grapes",
        H: "House",
        I: "Ice Cream",
        J: "Juice",
        K: "Kangaroo",
        L: "Lion",
        M: "Monkey",
        N: "Nurse",
        O: "Owl",
        P: "Panda",
        Q: "Queen",
        R: "Rabbit",
        S: "Sun",
        T: "Tiger",
        U: "Umbrella",
        V: "Violin",
        W: "Whale",
        X: "Xylophone",
        Y: "Yak",
        Z: "Zebra"
    };

    const handleNext = () => {
        setShowWord(false);
        if (currentIndex < alphabet.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handleShowWord = () => {
        setShowWord(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alphabet for Kids</Text>
            <AlphabetDisplay letter={alphabet[currentIndex]} />
            {showWord && <WordDisplay word={words[alphabet[currentIndex]]} />}
            <Button title="Next Letter" onPress={handleNext} />
            <Button title="Show Word" onPress={handleShowWord} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

const stylesAlph = StyleSheet.create({
    letterContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});

const stylesWord = StyleSheet.create({
    wordContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    word: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});