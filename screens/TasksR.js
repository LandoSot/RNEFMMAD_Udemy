import React from 'react'
import { Button, Text, View } from 'react-native'
import { global } from '../styles/Global'

const TasksR = ({navigation}) => {
  const goToHome = () =>{
    navigation.goBack()
  }
  return (
    <View style={global.container}>
      <Text>Task</Text>
      <Button title='Back to Home' onPress={goToHome}/>
    </View>
  )
}

export default TasksR
