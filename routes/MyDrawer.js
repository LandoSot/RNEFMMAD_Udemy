import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AboutStack } from './MyRoutes'
import HomeTab from './HomeTab'

const MyDrawer = () => {
  const Drawer = createDrawerNavigator ()
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name = 'Home' component={HomeTab} />
      <Drawer.Screen name = 'About' component={AboutStack} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
