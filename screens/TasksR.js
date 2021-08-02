import React from 'react'
import { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { global } from '../styles/Global'

const TasksR = ({navigation}) => {
  const goToHome = () =>{
    navigation.goBack()
  }

  const [tasks, setTasks] = useState([
    {"task":"HTML I","done":true, "id":"1"},
    {"task":"CSS","done":true, "id":"2"},
    {"task":"Responsive design","done":true, "id":"3"},
    {"task":"Git","done":true, "id":"4"},
    {"task":"JavaScript I","done":true, "id":"5"},
    {"task":"JavaScript II","done":false, "id":"6"}
  ])

  return (
    <View style={global.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>
          navigation.navigate('RenderTasks', item)
        }>
          <Text style={styles.list}>{item.task}</Text>
        </TouchableOpacity>
       )} 
      />
      <Button title='Back to Home' onPress={goToHome}/>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1


    /*borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,*/
  }
})

export default TasksR
