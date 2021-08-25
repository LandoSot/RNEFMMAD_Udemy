import React from 'react'
import { useState } from 'react'
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { global } from '../styles/Global'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from '../store/taskAction'

const TasksR = ({navigation}) => {
  const goToHome = () =>{
    navigation.goBack()
  }

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  const [text, setText] = useState ('')
  const changeHandler = (val) => { setText(val) }
  const submitTask = (text) => dispatch(addTask(text))

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
        <TouchableOpacity onPress={()=>
          navigation.navigate('RenderTasks', item)
        }>
          <Text style={global.list}>{item.task}</Text>
        </TouchableOpacity>
       )} 
      />
      <Button title='Back to Home' onPress={goToHome}/>
    </View>
  )
}

export default TasksR
