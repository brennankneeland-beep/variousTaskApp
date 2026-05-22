import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, useWindowDimensions, ImageBackground } from 'react-native';
import { useState } from 'react';
function Card({title, subtitle, image}){
    return(
        <View style={styles.card}>
            <Image source={image} style={{width: '100%', height: '70%', borderRadius: 10, overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}}/>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
            <Text style={{fontSize: 16}}>{subtitle}</Text>
        </View>
    );
}
export default Card;
const styles = StyleSheet.create({
    card: {width: '95%',
                height: '30%',
                backgroundColor: 'white',
                margin: 10,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: 'darkgray',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            },
});