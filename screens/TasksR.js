import React from 'react'
import { useState } from 'react'
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { global } from '../styles/Global'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, didTask } from '../store/taskAction'
import { AntDesign } from '@expo/vector-icons'

const TasksR = ({navigation}) => {
  const goToHome = () =>{
    navigation.goBack()
  }

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  const [text, setText] = useState ('')
  const changeHandler = (val) => { setText(val) }
  const submitTask = (text) => dispatch(addTask(text))
  const removeTask = id => dispatch(deleteTask(id))
  const finishTask = id => dispatch(didTask(id))

  return (
    <View style={global.container}>
      <TextInput
        style={global.input}
        placeholder = 'Add new task'
        onChangeText=
        {changeHandler}
      />
      <Button 
        title='Add task'
        onPress={() =>
          submitTask(text)
        }
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
        <View style = {global.tasksZone}>
          <AntDesign 
            name={item.done ? 'checkcircle' : 'checkcircleo'} size={24} color="black" 
            onPress = {() => finishTask(item.id)}
          />
          <TouchableOpacity 
            style = {global.pressZone}
            onPress = {() => navigation.navigate('RenderTasks', item)}>
            <Text style = {item.done ? null:{fontWeight:'bold'}}>{item.task}</Text>
          </TouchableOpacity>
          <AntDesign 
            name="delete" size={24} color="black" 
            onPress = {() => removeTask(item.id)}
          />
        </View>
       )} 
      />
      <Button title='Back to Home' onPress={goToHome}/>
    </View>
  )
}

export default TasksR
