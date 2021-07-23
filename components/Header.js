import React from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.title}>LSC Mobile Tasks</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      paddingTop: 12,
      backgroundColor: 'blue',
      height: 50
    },
    title: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic'            
    }
  });

export default Header
