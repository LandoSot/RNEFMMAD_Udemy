import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BitacoraStack, HomeStack } from './MyRoutes'

const HomeTab = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Bitacora' component={BitacoraStack} />
    </Tab.Navigator>
  )
}

export default HomeTab
