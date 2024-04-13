import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation()
  return (
    <View numColumns={2} style={{flexDirection:"row"}}>
      <Pressable onPress={() => navigation.navigate("Quiz")}
      style={{ backgroundColor: "#407BFF", padding: 14, width: 120, borderRadius: 25, marginLeft: "auto", marginRight: "auto", marginTop: 30 }}>
        <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>General Knowlage</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Math")}
      style={{ backgroundColor: "#407BFF", padding: 14, width: 120, borderRadius: 25, marginLeft: "auto", marginRight: "auto", marginTop: 30 }}>
        <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>Math</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("ICTQ")}
      style={{ backgroundColor: "#407BFF", padding: 14, width: 120, borderRadius: 25, marginLeft: "auto", marginRight: "auto", marginTop: 30 }}>
        <Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>ICT</Text>
      </Pressable>
      </View>
  )
}

export default Menu

const styles = StyleSheet.create({})