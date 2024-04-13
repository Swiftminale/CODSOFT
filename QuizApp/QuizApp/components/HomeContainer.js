import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeContainer = () => {
  return (
    <View style={styles.quiz}>
    <View style={{ flexDirection: "row", alignItems: "center", padding:5}}>
      <Text style={{ color: "white" }}>1.</Text>
      <Text style={{ marginLeft: 4, color: "white", fontSize: 15, fontWeight: "500"}}>For Each Correct Answer You Get 5 Marks</Text>
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", padding:5}}>
      <Text style={{ color: "white" }}>2.</Text>
      <Text style={{ marginLeft: 4, color: "white", fontSize: 15, fontWeight: "500" }}>For Each Question you will have 1 minute</Text>
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", padding:5}}>
      <Text style={{ color: "white" }}>3.</Text>
      <Text style={{ marginLeft: 4, color: "white", fontSize: 15, fontWeight: "500" }}>For Each Question you will have 1 minute</Text>
    </View>

  </View>
  )
}

export default HomeContainer

const styles = StyleSheet.create({
    quiz:{
        padding: 15, backgroundColor: "#407BFF", borderRadius: 16, marginVertical: 15
      }
})