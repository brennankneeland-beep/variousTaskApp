import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions, useWindowDimensions,  } from 'react-native';
import { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function GoodStuff({ setMode}){
    return(<View style = {{backgroundColor: 'black',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',// main axis
      alignItems: 'center', // cross axis, one row
      flexWrap: 'wrap',
      alignContent: 'center',// multiple rows
      }}>
    <TouchableOpacity onPress={() => {setMode('ToDo')}}>
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: 'magenta',
        borderWidth: 10,
        borderColor: 'purple',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        }}>
          <AntDesign name="calendar" size={60} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setMode('weather')}}>
        <View style={{
          backgroundColor: 'red', 
          height: 100,
          width: 100,
          borderWidth: 10,
          borderColor: 'tomato',
          borderRadius: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <MaterialIcons name="thermostat" size={60} color="black" />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setMode('small')}}>
        <View style={{
          backgroundColor: 'cyan', 
          height: 100,
          width: 100,
          borderWidth: 10,
          borderColor: 'blue',
          borderRadius: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AntDesign name="qq" size={60} color="black" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setMode('login')}} style={{position: 'absolute', bottom: 50, alignSelf: 'center'}} >
        <View style = {{width: '95%', height: 50, backgroundColor: 'red', borderWidth: 5, borderColor: 'tomato', borderRadius: 10, margin: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Logout</Text>
        </View>
        </TouchableOpacity>
    </View>
 );
}