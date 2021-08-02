import React from 'react'
import HomeR from '../screens/HomeR'
import TaskR from '../screens/TasksR'
import AboutR from '../screens/AboutR'
import RenderTasksR from '../screens/RenderTasksR'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator ();

const MyRoutes = () => {
  return (
    <Stack.Navigator
      /*screenOptions={{
        headerStyle: {backgroundColor: 'grey'},
        headerTintColor: 'white',
        headerTitleStyle: 'bold'
      }}*/
    >

      <Stack.Screen name = 'Home' component={HomeR}/>
      <Stack.Screen name = 'Task' component={TaskR}/>
      <Stack.Screen name = 'Abou' component={AboutR}/>
      <Stack.Screen 
        name = 'RenderTasks' 
        component={RenderTasksR}
        options={({route}) => ({title: route.params.task})}
      />
    </Stack.Navigator>
  )
}

export default MyRoutes
