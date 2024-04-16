import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Button,
} from "react-native";
import { firebase } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Detail = ({ route }) => {
  const todoRef = firebase.firestore().collection("todos");
  const [textHeading, onChangeTextHeading] = useState(route.params.heading);
  const navigation = useNavigation();
  //Updates Todo
  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>
      <TextInput
        style={styles.textfield}
        onChangeText={onChangeTextHeading}
        value={textHeading}
        placeholder="Update Todo"
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {
          updateTodo();
        }}
      >
        <Text>UPDATE TODO</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
  },
  textfield: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    fontSize: 15,
    height: 75,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  buttonUpdate: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "#0de065",
  },
});

export default Detail;
