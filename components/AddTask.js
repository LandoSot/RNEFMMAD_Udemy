import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddTask = ({addTask}) => {
  const [text, setText] = useState ('')
  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder = 'Add new task'
        onChangeText=
        {changeHandler}
      />
      <Button 
        title='Add task'
        onPress={() =>
          addTask(text)
        }
      />
    </View>
  )}

const styles = StyleSheet.create ({
  input: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    margin: 10,
    paddingVertical: 6
  }
})

export default AddTask
