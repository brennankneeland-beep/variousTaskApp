import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';


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
        }}>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setMode('weather')}}>
        <View style={{
          backgroundColor: 'red', 
          height: 100,
          width: 100,
        }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setMode('small')}}>
        <View style={{
          backgroundColor: 'cyan', 
          height: 100,
          width: 100,
        }}>
      </View>
        </TouchableOpacity>
        </View>
 );
}