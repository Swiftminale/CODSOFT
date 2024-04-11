import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/img/Head.png')}
      />


      <View style={styles.quizRull}>
        <Text style={styles.textQ}>
          Quiz Rules
        </Text>
      </View>


      <View style={{ padding: 15, backgroundColor: "#90E0EF", borderRadius: 16, marginVertical: 15 }}>
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
      <Pressable onPress={() => navigation.navigate("Quiz")}
      style={{ backgroundColor: "#90E0EF", padding: 14, width: 120, borderRadius: 25, marginLeft: "auto", marginRight: "auto", marginTop: 30 }}>
        <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>Start Quiz</Text>
      </Pressable>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  image: {
    width: "100%",
    height: 250,
    paddingTop: 45,
    resizeMode: 'contain',
  },
  quizRull: {
    padding: 10
  },
  textQ: {
    textAlign: "center",
    color: "#0077B6",
    fontSize: 24,
    fontWeight: "600"
  }
})