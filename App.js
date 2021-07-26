import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    if (!text){
      Alert.alert('No task?', 'Please type some task to add them to the list')
    }
    else {
      setTasks(prevTasks =>{
        return [{
          task:text, id:uuidv4()},
          ...prevTasks
        ]
      })
    }
  }

  const deleteTask = id => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id != id)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTask addTask={addTask}/>
          <View style={styles.list}>
            <FlatList
              data = {tasks}
              renderItem={({ item }) => (
                <Task 
                  item={item} 
                  deleteTask={deleteTask}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
