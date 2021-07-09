import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [user, setUser] = useState ("Lando")
  const [style, setStyle] = useState({form: "gordo", apareance: "feo"})
  const pressHandler = () =>{
    setUser("Elisa")
    setStyle({form: "delgada", apareance: "hermosa"})
  }
  
  return (
    <View style={styles.container}>
      <Text>{user} es {style.form} y bastante {style.apareance}</Text>
      <View style={styles.buttonStyle}>
        <Button title="Update"
          onPress = {pressHandler}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    margin: 20
  }
});
