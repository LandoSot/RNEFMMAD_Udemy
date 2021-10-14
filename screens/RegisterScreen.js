import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../Firebase'


const RegisterScreen = ({navigation}) => {
  let initialState = ''
  const [email, setEmail] = useState(initialState)
  const [password, setPassword] = useState(initialState)
  const [confPassword, setConfPassword] = useState(initialState)
  const [userName, setUsertName] = useState(initialState)

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //Signed in
      var user = userCredential.user;
      user.updateProfile({
        displayName: userName,
        photoURL: 'https://freesvg.org/img/abstract-user-flat-1.png'
      }).then(() => {
        // Update successful
        navigation.goBack()
        alert('Cuenta creada correctamente, por favor inicia sesión')
      }).catch((error) => {
        // An error occurred
      });  
      //...
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage)
      //..
    })
  }

  return (
    <ScrollView>
    <SafeAreaView style = {{flex: 1, alignItems:'center'}} >
      <StatusBar barStyle="light" />
      <View style = {{marginTop: '5%', width: '90%'}}>
        <Text style = {{fontWeight: 'bold', fontSize: 30}}>Registrate</Text>
        <Text>Crea tu cuenta, aprende, y opera con nosotros.</Text>
        <View style = {styles.formViewsInputs}>
          <Text style = {styles.formTexts}>
            Correo electrónico
          </Text>
          <TextInput
            mode = 'outlined'
            style = {styles.formInputs}
            value = {email}
            onChangeText = {text => setEmail(text)}
            placeholder = 'ejemplo@email.com'
          />
        </View>
        <View style = {styles.formViewsInputs}>
          <Text style = {styles.formTexts}>
            Contraseña
          </Text>
          <TextInput
            mode = 'outlined'
            style = {styles.formInputs}
            placeholder = 'micontraseña123'
            value = {password}
            onChangeText = {text => setPassword(text)}
            secureTextEntry
          />
        </View>
        
        <View style = {styles.formViewsInputs}>
          <Text style = {styles.formTexts}>
            Confirma tu contraseña
          </Text>
          <TextInput
            mode = 'outlined'
            style = {styles.formInputs}
            placeholder = 'micontraseña123'
            value = {confPassword}
            onChangeText = {text => setConfPassword(text)}
            secureTextEntry
          />
        </View>

        <View style = {styles.formViewsInputs}>
          <Text style = {styles.formTexts}>
            Nombre de Usuario
          </Text>
          <TextInput
            mode = 'outlined'
            style = {styles.formInputs}
            value = {userName}
            onChangeText = {text => setUsertName(text)}
            placeholder = 'Juan Antonio'
          />
        </View>

      </View>

      <View style = {{marginTop: '2%'}}>
        <Button mode = 'contained' color = 'brown'
          onPress={register}
          style = {{margin: '4%', width: '100%'}}
        >
          Registrarse
        </Button>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create ({
  formViewsInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 30
  },
  formTexts: {
    color: 'green',
    fontWeight: 'bold',
    width: '30%'
  },
  formInputs: {
    backgroundColor: null,
    width: '70%'
  }
})