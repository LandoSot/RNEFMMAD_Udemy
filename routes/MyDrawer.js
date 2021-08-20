import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AboutStack } from './MyRoutes'
import HomeTab from './HomeTab'

const MyDrawer = () => {
  const Drawer = createDrawerNavigator ()
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen 
        name = 'HomeDrawer' component={HomeTab} 
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
