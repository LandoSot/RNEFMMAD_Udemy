import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BitacoraStack, DoneTasksStack, HomeStack } from './MyRoutes'

const HomeTab = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name = 'HomeTabBar' component = {HomeStack}
        options = {{tabBarLabel:'Home'}}  
      />
      <Tab.Screen
        name = 'DoneTasksTabBar' component = {DoneTasksStack}
        options = {{tabBarLabel:'Done Tasks'}}
      />
      <Tab.Screen 
        name = 'BitacoraTabBar' component = {BitacoraStack}
        options = {{tabBarLabel:'Bitácora'}}
      />
    </Tab.Navigator>
  )
}

export default HomeTab
