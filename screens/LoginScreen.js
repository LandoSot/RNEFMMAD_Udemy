import React, { useState } from 'react'
import { View, StatusBar } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style = {{flex: 1, alignItems:'center'}} >
      <StatusBar barStyle="light" />
      <View style = {{marginTop: '10%', width: '80%'}}>
      <Text style = {{fontWeight: 'bold', fontSize: 30}}>Inicia Sesión</Text>
      <Text>¡Hola! Es un gusto verte de nuevo.</Text>
        <Text style = {{color: 'green',
          fontWeight: 'bold', marginTop: 50}}
        >
          Correo electrónico
        </Text>
        <TextInput
          style = {{backgroundColor: null}}
          value = {email}
          onChangeText = {text => setEmail(text)}
          placeholder = 'ejemplo@email.com'
        />
        <Text style = {{color: 'green',
          fontWeight: 'bold', marginTop: 20}}
        >
          Contraseña
        </Text>
        <TextInput
          style = {{backgroundColor: null}}
          placeholder = 'micontraseña123'
          value = {password}
          onChangeText = {text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style = {{marginTop: '4%'}}>
        <Button mode = 'contained' color = 'green'
          onPress={() => console.log('Logeado')}
          style = {{marginTop: '4%', width: '100%'}}
        >
          Iniciar Sesión
        </Button>
        <Button mode = 'contained' color = 'brown'
          onPress={() => navigation.push('Register')}
          style = {{marginTop: '4%', width: '100%'}}
        >
          Registrarse
        </Button>
      </View>
    </View>
  )
}

export default LoginScreen
