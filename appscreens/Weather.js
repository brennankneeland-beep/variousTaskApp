import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions, useWindowDimensions, ImageBackground } from 'react-native';
import { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
export default function Weather(){
    const [degrees, setDegrees] = useState(null);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=49.67&longitude=-125.01&current_weather=true')
        .then(response => response.json())
        .then(data => setDegrees(data.current_weather.temperature));
    const {width, height} = useWindowDimensions();
    return(
    <ImageBackground source={require('../assets/thrmo.png')} style={{flex: 1,
        AlignItems: 'center',
        justifyContent: 'center',
    }}>
        <Text style={{color: 'blue', fontSize: 30, top:height/2 -50, alignSelf: 'center'}}>{degrees}°C</Text>
    
    </ImageBackground>
    );
}