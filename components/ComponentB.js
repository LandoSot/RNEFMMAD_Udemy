import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/action';

const Separator = () => (
  <View style={styles.separator} />
);

const ComponentB = () => {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <View>
      <Text style={{fontSize: 30}}>ComponentB : {counter}</Text>
      <Button title = '+' onPress={() => dispatch(increment())}/>
      <Separator />
      <Button title = '-' onPress={() => dispatch(decrement())}/>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    flex: 1,
    marginTop: 10
  },
  separator:{
    marginVertical: 5
  }
})

export default ComponentB
