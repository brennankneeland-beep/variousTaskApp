import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions, useWindowDimensions, ImageBackground } from 'react-native';
import { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function SmallStuff(){
  const [y, setY] = useState(0);
  const [x, setX] = useState('hi');
  const [z, setZ] = useState(0);
  const [time, setTime] = useState( new Date());
  
  const {width, height} = useWindowDimensions();
  const landscape = width > height;
    return(<>
    <View style={styles.container} >
      <TouchableOpacity onPress={() => { setY(y + 1)}}>
        <Image source={require('../assets/lion.png')} style={{flex: 1}} />
      </TouchableOpacity>
    </View>
    <View style={styles.s2} >
      <Button
       color= 'red' 
       backgroundColor= 'yellow'
       title='click me' 
       onPress={() => {const currentTime = new Date(); alert(`value saved, time since last pressed: ${(currentTime - time)/1000} seconds`); setTime(currentTime); if (z == 0){setX('saved values: ' + y); setZ(1) } else {setX(x + ', ' + y)}}}
      />
      <Text style = {{color: 'white', fontSize: 30}}>{x} current value:{y}</Text>
    </View>
    </>);
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '50%',
    width: '100%',
  },
  s2: {
    flex: 1,
    flexDirection: 'comlumn',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});