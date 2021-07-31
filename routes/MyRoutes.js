import React from 'react'
import HomeR from '../screens/HomeR'
import TaskR from '../screens/TasksR'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator ();

const MyRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Home' component={HomeR}/>
      <Stack.Screen name = 'Task' component={TaskR}/>
    </Stack.Navigator>
  )
}

export default MyRoutes
