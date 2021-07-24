import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Task = ({item}) => {
  return (
    <TouchableOpacity style={styles.items}>
      <Text>{item.task}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  items: {
    padding: 10,
    borderColor: 'black',
    borderRadius: 5,
    //borderStyle: 'dashed',
    borderWidth: 1,
    marginTop: 15,
  }
})

export default Task
