import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MyRoutes from './routes/MyRoutes';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(
    <NavigationContainer> 
      <MyRoutes/>
    </NavigationContainer>
  );
}
