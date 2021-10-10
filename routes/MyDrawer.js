import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AboutStack } from './MyRoutes'
import HomeTab from './HomeTab'
import Stack_Main from './Stack_Main'

const MyDrawer = () => {
  const Drawer = createDrawerNavigator ()
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen 
        name = 'HomeDrawer' component={Stack_Main} 
        options={{drawerLabel:'Home'}}
      />
      <Drawer.Screen 
        name = 'AboutDrawer' component={AboutStack}
        options = {{drawerLabel:'About'}}
      />
    </Drawer.Navigator>
  )
}

export default MyDrawer
