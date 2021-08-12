import React from 'react'
import { Button, Text, View } from 'react-native'
import { global } from '../styles/Global'

const HomeR = ({navigation}) => {
  const goToTaskR = () => {
    navigation.push('Task')
  }

  return (
    <View style={global.container}>
      <Text>Home</Text>
      <Button title='Go to Task' onPress={goToTaskR}/>
    </View>
  )
}

export default HomeR
