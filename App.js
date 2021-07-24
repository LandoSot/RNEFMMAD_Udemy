import React, { useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [tasks, setTasks] = useState([
    {"task":"HTML I","done":true, "id":"1"},
    {"task":"CSS","done":true, "id":"2"},
    {"task":"Responsive design","done":true, "id":"3"},
    {"task":"Git","done":true, "id":"4"},
    {"task":"JavaScript I","done":true, "id":"5"},
    {"task":"JavaScript II","done":false, "id":"6"}
    ])

  const addTask = (text) =>{
    setTasks(prevTasks =>{
      return [{
        task:text, id:uuidv4()},
        ...prevTasks
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTask addTask={addTask}/>
        <View style={styles.list}>
          <FlatList
            data = {tasks}
            renderItem={({ item }) => (
              <Task item={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  content: {
    padding: 10
  },
  list: {
    marginTop: 10
  }
});
