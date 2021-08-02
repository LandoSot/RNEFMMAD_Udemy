import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { global } from '../styles/Global'

const RenderTasksR = ({ navigation, route} ) => {
  const goToTask = () =>{
    navigation.goBack()
  }
  const goToHome = () =>{
    navigation.popToTop()
  }

  return (
    <View style={global.container}>
      <Text>{route.params.task}</Text>
      <View styles={global.buttonsRow}>
        <Button title='Back to Tasks' onPress={goToTask} />
        <Button title='Home' onPress={goToHome} color='green'/>
      </View>
    </View>
  )
}

export default RenderTasksR
