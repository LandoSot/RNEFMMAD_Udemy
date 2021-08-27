import React from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { global } from '../styles/Global'
import { Ionicons } from '@expo/vector-icons'

const DoneTasks = () => {
  const tasks = useSelector(state => state.tasks)
  const tasksDone = tasks.filter(item => item.done === true)

  return (
    <View style = {{margin: 10}}>
      <FlatList
        data={tasksDone}
        renderItem={({ item }) => (
        <View style = {global.tasksZone}>
          <TouchableOpacity 
            style = {global.pressZone}
            onPress = {() => navigation.navigate('RenderTasks', item)}
          >
            <Text style = {item.done ? null:{fontWeight:'bold'}}>{item.task}</Text>
          </TouchableOpacity>
          <Ionicons name='checkmark-done' size={24} color="black" />
        </View>
       )} 
      />
    </View>
  )
}

export default DoneTasks
