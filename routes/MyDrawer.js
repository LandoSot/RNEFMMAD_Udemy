import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeR from '../screens/HomeR'
import AboutR from '../screens/AboutR'
import { AboutStack, HomeStack } from './MyRoutes'
import TasksR from '../screens/TasksR'
import RenderTasksR from '../screens/RenderTasksR'

const MyDrawer = () => {
  const Drawer = createDrawerNavigator ()
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name = 'Home' component={HomeStack} />
      <Drawer.Screen name = 'About' component={AboutStack} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
