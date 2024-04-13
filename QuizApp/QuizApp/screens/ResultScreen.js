import {Text,View,SafeAreaView,Image,Pressable,FlatList,ScrollView,} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/ResultScreenStyles";

const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // Here we can calculate the number of questions answered
  const numQuestionsAnswered = route.params.answers.filter(item => item.answer).length;
  const totalQuestions = route.params.answers.length;

  return (
    <SafeAreaView style={{ margin: 50 }}>
      <View style={styles.FirstRow}>
        <Text>Your Results</Text>
        <View style={styles.FirstRowShare}>
          <Text>Share</Text>
          <AntDesign style={{ marginLeft: 4 }} name="sharealt" size={18} color="black" />
        </View>
      </View>
      <View style={styles.QuestionsAnswerd}>
        <Text>Question Answered</Text>
        <Text style={styles.value}>({numQuestionsAnswered}/{totalQuestions})</Text>
        {/* TODO: write the correct value */}
      </View>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.ScoreCard}>Score Card</Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={styles.Item_Question} >
              <Text>{item.questions}</Text>
              {item.answer === true ? (
                <AntDesign style={{ marginLeft: 5 }} name="checkcircle" size={20} color="green"/>
              ) : (
                <AntDesign style={{ marginLeft: 5 }} name="closecircle" size={20} color="red"/>
              )}
              <Text style={{ marginLeft: 5 }}>{item.answer ? "Wrong" : "Correct"}</Text>
            </View>
          )}
        />
      </ScrollView>

      <View style={{ flex: 1, marginTop: 35 }}>
      {/* <Text>({numQuestionsAnswered} * 10)</Text> */}
        <Image style={styles.Image} source={require("../assets/img/Winners-rafiki.png")} />
      </View>
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.PressableContinue} >
        <Text style={styles.Continue}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ResultScreen;