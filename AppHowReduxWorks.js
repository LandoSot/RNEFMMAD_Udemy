import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import store from './store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ComponentA />
        <ComponentB />
      </Provider>
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
