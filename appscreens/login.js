import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {AppText} from './AppText';

export default function Login({ setMode }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState([]);

  return (
    <View style={styles.background}>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
    <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => {{if (userData.some(user => user.username === username && user.password === password)) { setMode('good'); }}}}>
        <View style={[styles.button, { backgroundColor: 'red', borderColor: 'tomato' }]}>
          <AppText>Login</AppText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setUserData([...userData, { username, password }]);
        }}
      >
        <View style={[styles.button, { backgroundColor: 'magenta', borderColor: 'purple' }]}>
          <AppText>Register</AppText>
        </View>
      </TouchableOpacity>
      
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'lightgray',
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 30,
    borderRadius: 5,
    borderWidth: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});