import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BitacoraStack, HomeStack } from './MyRoutes'

const HomeTab = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name = 'HomeTabBar' component = {HomeStack}
        options = {{tabBarLabel:'Home'}}  
      />
      <Tab.Screen 
        name = 'BitacoraTabBar' component = {BitacoraStack}
        options = {{tabBarLabel:'Bitácora'}}
      />
    </Tab.Navigator>
  )
}

export default HomeTab
