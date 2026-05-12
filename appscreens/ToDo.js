import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions, useWindowDimensions, ImageBackground, TextInput } from 'react-native';
import { useState } from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
export default function ToDo({setMode}){
    const [toDos, setToDos] = useState([]);
    const [text, setText] = useState('');
    const {width, height} = useWindowDimensions();
    const [done, setDone] = useState([]);
    // next step: save list to local storage, add option to delete from done list, add option to edit to-do items
    const removeItem = (index) => {
        setDone([...done, toDos[index]]);
        setToDos(toDos.filter((toDo, i) => i !== index));

    }
    return(
        <ImageBackground source={require('../assets/noteBG.png')} style={styles.background}>
            <View>
                <Text>To-Do List</Text>
                <TextInput style={styles.textEntry} value={text} onChangeText={setText} placeholder='enter to-do here' />
                <Button title='add to list' onPress={() => {setToDos([...toDos, text]); setText('');}} />
                <View>
                    {toDos.map((toDo, index) => 
                    <TouchableOpacity style={styles.toDoBox} key={index} onPress={() => removeItem(index)}>
                        <Text style={{fontSize: 16, color: 'black'}}>{toDo}</Text>
                        <View style={styles.destroyEntry}></View>
                    </TouchableOpacity>
                    )}
                </View>

            </View>
            <View>
                <Text>Done:</Text>
                {done.map((doneItem, index) => 
                    <View style={styles.doneBox} key={index}>
                        <Text style={{fontSize: 16, color: 'black'}}>{doneItem}</Text>
                    </View>
                    )}
            </View>
            <TouchableOpacity onPress={() => {setMode('good')}}style={{position: 'absolute', bottom: 50, alignSelf: 'center'}} >
        <View style={{
          backgroundColor: 'red', 
          height: 50,
            width: 100,
            borderWidth: 5,
            borderColor: 'tomato',
            borderRadius: 10,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{color: 'black', fontSize: 20}}>Back</Text>
        </View>
        </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
    },
    textEntry: {
        height: 40,
        width: 200,
        backgroundColor: 'lightgray',
        borderColor: 'black',
        borderWidth: 1,
        color: 'black',
    },
    destroyEntry: {
        height: 10,
        width: 10,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,},
    toDoBox: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    doneBox: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});
