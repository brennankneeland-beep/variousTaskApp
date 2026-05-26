import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Malcolm({ setMode }) {
  const [random, setRandom] = useState(getRandomInt(100));
  const [red, setRed] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!red && random <= 80) {
      const id = setTimeout(() => {
        setRandom(getRandomInt(100));
      }, 300);
      return () => clearTimeout(id);
    }

    if (!red && random >= 80) {
      setRed(true);
      setTime(new Date()); // start timing the reaction
    }
  }, [random, red]);
  if (red) {
    return (
        <View style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => {
            const currentTime = new Date();
            alert(`Reaction time: ${(currentTime - time) / 1000} seconds`); 
            setRandom(getRandomInt(10)); // restart cycle
            setRed(false);
          }}>
      <View style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 30 }}>Tap!</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  }

  // WHITE SCREEN (still generating)
  return (
    <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Generating… {random}</Text>
    </View>
  );
}