import React from 'react'
import { useState } from 'react'
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { global } from '../styles/Global'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, didTask } from '../store/taskAction'

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
        <TouchableOpacity style={global.list} onPress={()=>
          navigation.navigate('RenderTasks', item)
        }>
          <Text 
            onPress = {() => finishTask(item.id)}
            style = {item.done ? null: {fontWeight: 'bold'}}
          >
            {item.task}
          </Text>
          <Button title = 'Delete'
          onPress = {() => removeTask(item.id)}/>
        </TouchableOpacity>
       )} 
      />
      <Button title='Back to Home' onPress={goToHome}/>
    </View>
  )
}

export default TasksR
