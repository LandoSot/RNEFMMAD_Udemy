import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import Task from './components/Task';

export default function App() {
  const [tasks, setTast] = useState([
    {"task":"HTML I","done":true, "id":"1"},
    {"task":"CSS","done":true, "id":"2"},
    {"task":"Responsive design","done":true, "id":"3"},
    {"task":"Git","done":true, "id":"4"},
    {"task":"JavaScript I","done":true, "id":"5"},
    {"task":"JavaScript II","done":false, "id":"6"}
    ])

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data = {tasks}
            renderItem={({ item }) => (
              <Task item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    //Top: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  content: {
    padding: 10
  },
  list: {
    marginTop: 10
  }
});
