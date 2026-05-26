import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, useWindowDimensions, ImageBackground, SafeAreaViewBase } from 'react-native';
import { useState } from 'react';

import Card from './card';
export default function CardTesterScreen({setMode}){
    const {width, height} = useWindowDimensions();
    return(
        <View style={[{backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'flex-start', alignContent: 'flex-start',}, styles.ioss]}>
            <Card 
                title="card title here" 
                subtitle="card subtitle here"
                image={require('../assets/lion.png')}>
            </Card>
            <Card title='cool card' subtitle= 'one million dollars' image={require('../assets/thrmo.png')}/>
            <TouchableOpacity onPress={() => {setMode('good')}} style={{position: 'absolute', bottom: 50, alignSelf: 'center'}} >
        <View style={{
          backgroundColor: 'red',
            height: 50,
            width: 100,
            borderWidth: 5,
            borderColor: 'tomato',
            borderRadius: 10,}}>
            <Text>Back</Text>
            </View>
        </TouchableOpacity>

        </View>

);}
const styles = StyleSheet.create({
    ioss: {
        padding : Platform.OS === 'ios' ? 30 : 0
    }
});