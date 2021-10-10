import React from 'react'
import Bitacora from '../screens/Bitacora'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator ()
const Stack_Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Login' component = {LoginScreen} />
      <Stack.Screen name = 'Register' component = {RegisterScreen} />
      <Stack.Screen name = 'Binnacle' component = {Bitacora} />
    </Stack.Navigator>
  )
}

export default Stack_Main
