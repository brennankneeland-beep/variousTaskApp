import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useState } from 'react';
export function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontFamily: Platform.OS === 'ios'? 'Avenir' : 'Roboto',
        fontSize: 16,
    },
})