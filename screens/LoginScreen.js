import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'

const LoginScreen = () => {
  const [text, setText] = React.useState('')
  return (
    <View style = {{flex: 1, alignItems:'center'}} >
      <StatusBar barStyle="light" />
      <View style = {{marginTop: '10%', width: '80%'}}>
      <Text style = {{fontWeight: 'bold', fontSize: 30}}>Inicia Sesión</Text>
      <Text>¡Hola! Es un gusto verte de nuevo.</Text>
        <Text style = {{color: 'green'/*'#fcd580'*/, fontWeight: 'bold', marginTop: 50}}>Correo electrónico</Text>
        <TextInput
          style = {{backgroundColor: null}}
          value = {text}
          placeholder = 'ejemplo@email.com'
          //placeholderTextColor = 'white'
          selectionColor = '#fcd580'
          outlineColor = '#fcd580'
          underlineColor = 'black'
        />
        <Text style = {{color: 'green' /*'#fcd580'*/, fontWeight: 'bold', marginTop: 20}}>Contraseña</Text>
        <TextInput
          style = {{backgroundColor: null}}
          value = {text}
          placeholder = 'Contraseña?'
          //placeholderTextColor = 'white'
          underlineColor = 'black'
          selectionColor = '#fcd580'
          outlineColor = 'black'
          secureTextEntry
        />
      </View>
    </View>
  )
}

export default LoginScreen
