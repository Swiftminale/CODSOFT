import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import { firebase } from "../firebaseConfig";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const todoRef = firebase.firestore().collection("todos");
  const [addData, setAddData] = useState("");
  const navigation = useNavigation();
  const [completedTodos, setCompletedTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    todoRef.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        const { heading } = doc.data();
        todos.push({
          id: doc.id,
          heading,
        });
      });
      setTodos(todos);
    });
  }, []);

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.completed));
  }, [todos]);
  // Delete Todos
  const deleteTodo = (todo) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            todoRef
              .doc(todo.id)
              .delete()
              .then(() => {
                alert("Deleted successfully");
              })
              .catch((error) => {
                alert(error);
              });
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };
  // Toggles Compeletion
  const toggleCompletion = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Add Todos
  const addTodo = () => {
    if (addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          setAddData("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image
          source={require("../assets/Img/list-amico.png")}
          style={styles.image}
        />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search todos..."
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new todo"
            placeholderTextColor="#aaaaaa"
            onChangeText={(heading) => setAddData(heading)}
            value={addData}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={addTodo}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredTodos}
          numColumns={1}
          renderItem={({ item }) => (
            <View>
              <Pressable
                style={styles.container}
                onPress={() => navigation.navigate("Detail", { item })}
              >
                <TouchableOpacity onPress={() => toggleCompletion(item)}>
                  <FontAwesome
                    name={item.completed ? "close" : "circle-o"}
                    color={item.completed ? "red" : "green"}
                    style={styles.radioButton}
                  />
                </TouchableOpacity>
                <View style={styles.innerContainer}>
                  <Text
                    style={
                      item.completed
                        ? [styles.itemHeading, styles.completedText]
                        : styles.itemHeading
                    }
                  >
                    {item.heading[0].toUpperCase() + item.heading.slice(1)}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => deleteTodo(item)}>
                  <FontAwesome
                    name="trash-o"
                    color="red"
                    style={styles.todoIcon}
                  />
                </TouchableOpacity>
              </Pressable>
              <Pressable></Pressable>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    alignItems: "center",
  },
  radioButton: {
    fontSize: 35,
    marginRight: 0,
  },
  innerContainer: {
    alignItems: "baseline",
    flexDirection: "column",
    marginLeft: 5,
  },
  itemHeading: {
    fontWeight: "bold",
    fontSize: 12,
    marginRight: 12,
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },

  todoIcon: {
    marginTop: 5,
    fontSize: 25,
    marginLeft: 14,
  },
  image: {
    width: "100%",
    height: 350,
    marginHorizontal: 35,
    resizeMode: "repeat",
    opacity: 0.5,
  },
  todo: {
    fontSize: 44,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 10,
    marginRight: 10,
  },
});

export default Home;
