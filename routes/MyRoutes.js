import React from 'react'
import HomeR from '../screens/HomeR'
import TaskR from '../screens/TasksR'
import AboutR from '../screens/AboutR'
import Bitacora from '../screens/Bitacora'
import RenderTasksR from '../screens/RenderTasksR'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator ();

const AboutStack = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'AboutA' component={AboutR}/>
    </Stack.Navigator>
  )
}
const HomeStack = () => {
  return (
    <Stack.Navigator
      /*screenOptions={{
        headerStyle: {backgroundColor: 'grey'},
        headerTintColor: 'white',
        headerTitleStyle: 'bold'
      }}*/
    >

      <Stack.Screen name = 'Home' component={HomeR} />
      <Stack.Screen name = 'Task' component={TaskR} />
      <Stack.Screen 
        name = 'RenderTasks' 
        component = {RenderTasksR}
        options = {({route}) => ({title: route.params.task})}
      />
    </Stack.Navigator>
  )
}

const BitacoraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Bitacora' component = {Bitacora}/>
    </Stack.Navigator>
  )
}

export {AboutStack, BitacoraStack, HomeStack}
