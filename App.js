import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import Login from './appscreens/login';
import Weather from './appscreens/Weather';
import GoodStuff from './appscreens/Goodstuff';
import SmallStuff from './appscreens/SmallStuff';
import ToDo from './appscreens/ToDo';
export default function App() {
  const { width, height } = useWindowDimensions();
  const landscape = width > height;
  const [mode, setMode] = useState('');
  if (mode == 'good'){
    return(<GoodStuff setMode={setMode} />);
  } else if (mode == 'weather'){
    return(<Weather setMode={setMode} />);
  } else if (mode == 'ToDo'){
    return(<ToDo setMode={setMode} />);
  } else if (mode == 'small'){
    return(<SmallStuff setMode={setMode} />);
  } else {
    return(<Login setMode={setMode} />);
  }
}

