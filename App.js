import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [user, setUser] = useState ("Lando")
  const [knowledge, setStudies] = useState({ study: "trader", phase: "entrenamiento" })
  const pressHandler = () =>{
    setUser("Elisa")
    setStudies({ study: "repostera", phase: "modo profesional" })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>{user} es {knowledge.study} en {knowledge.phase}</Text>
      <TextInput style={styles.textInput}
        placeholder = "Enter the user name"
        onChange ={e => setUser(e.target.value)}
      />
      <TextInput style={styles.textInput}
        placeholder = "Enter the user studies"
        onChange ={e => setStudies({ ...knowledge, study: e.target.value })}
      />
      <TextInput style={styles.textInput}
        placeholder = "Enter the user grade"
        onChange ={e => setStudies({ ...knowledge, phase: e.target.value })}
      />
      <View style={styles.buttonStyle}>
        <Button title='Update'
          onPress = {pressHandler}
        />
      </View>
      <StatusBar style = 'auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyle: {
    margin: 5
  },
  mytext: {
    fontSize: 20
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    margin: 3,
    padding: 5,
    width: '70%'
  }
});
