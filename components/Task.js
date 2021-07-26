import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Task = ({item, deleteTask}) => {
  return (
    <TouchableOpacity style={styles.items}>
      <Text>{item.task}</Text>
      <AntDesign 
        name="delete" 
        size={24} 
        color="black" 
        onPress={()=>deleteTask(item.id)}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  items: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 10,
  }
})

export default Task
