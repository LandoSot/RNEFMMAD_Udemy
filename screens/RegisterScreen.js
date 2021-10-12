import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const RegisterScreen = () => {
  let initialState = ''
  const [email, setEmail] = useState(initialState)
  const [password, setPassword] = useState(initialState)
  const [confPassword, setConfPassword] = useState(initialState)
  const [firstName, setFirstName] = useState(initialState)
  const [lastName, setLastName] = useState(initialState)

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
            Nombre(s)
          </Text>
          <TextInput
            mode = 'outlined'
            style = {styles.formInputs}
            value = {firstName}
            onChangeText = {text => setFirstName(text)}
            placeholder = 'Juan Antonio'
          />
        </View>

        <View style = {styles.formViewsInputs}>
          <Text style = {styles.formTexts}>
            Apellidos
          </Text>
          <TextInput
            mode = 'outlined'
            style = {styles.formInputs}
            value = {lastName}
            onChangeText = {text => setLastName(text)}
            placeholder = 'Perez Andrade'
          />
        </View>
      </View>

      <View style = {styles.formsViewsButtons}>
        <Button mode = 'contained' color = 'brown'
          onPress={() => console.log('Registrando')}
          style = {{margin: '10%'}}
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