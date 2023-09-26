import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F9F9F9",
    flex:1
  }
})