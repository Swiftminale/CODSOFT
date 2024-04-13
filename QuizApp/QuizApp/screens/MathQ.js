import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import questions from "../data/questions";
import General from "../data/General";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import QuizHeader from "../components/QuizHeader";

const MathQ = () => {
  const data = questions;

  const totalQuestions = data.length;

  const navigation = useNavigation();
  //Points
  const [points, setPoints] = useState(0);

  // index of the questions
  const [index, setIndex] = useState(0);

  //answer Status (true or Fales)
  const [answeredStatus, SetAnsweredStatus] = useState(null);

  //answer
  const [answer, SetAnswer] = useState([]);

  //selected answer
  const [selectedAnswerIndex, SetSelectedAnswerIndex] = useState(null);

  //Counter
  const [Counter, setCounter] = useState(15);

  //interval
  let interval = null;

  //progress bar

  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  //useEffect

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        SetAnsweredStatus(true);
        answer.push({ questions: index + 1, answer: true });
      } else {
        SetAnsweredStatus(false);
        answer.push({ questions: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    SetSelectedAnswerIndex(null);
    SetAnsweredStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (Counter >= 1) {
        setCounter((Counter) => Counter - 1);
      }
      if (Counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };
    interval = setTimeout(myInterval, 1000);
    // clean up function
    return () => {
      clearTimeout(interval);
    };
  }, [Counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("Results", {
        answers: answer,
        points: points,
      });
    }
  });
  console.log("Current Index , ", index, "Total ,", totalQuestions);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(currentQuestion);

  return (
    <SafeAreaView>
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 45,
        }}
      >
        <Text>Quiz Challenge</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "#407BFF", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {Counter}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text>your Progress</Text>
        <Text>
          ({index}/{totalQuestions}) Questions Answered
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#90E0EF",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>
    </View>
      <View
        style={{
          backgroundColor: "#F0F8ff",
          marginTop: 30,
          padding: 10,
          borderRadius: 7,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 10 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              key={item.id}
              onPress={() =>
                selectedAnswerIndex === null && SetSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion?.correctAnswerIndex ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="checkcircle"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="closecircle"
                  size={20}
                  color="black"
                />
              ) : (
                <Text
                  style={{
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                {item.answer}
              </Text>
              {selectedAnswerIndex !== null &&
              selectedAnswerIndex !== currentQuestion?.correctAnswerIndex &&
              index === currentQuestion?.correctAnswerIndex ? (
                <Text style={{ marginLeft: 10, color: "green" }}>
                  (Correct Answer)
                </Text>
              ) : null}
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answeredStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answeredStatus === null ? null : (
          <Text
            style={
              answeredStatus == null
                ? null
                : {
                    fontSize: 70,
                    textAlign: "center",
                    fontWeight: "bold",
                  }
            }
          >
            {!!answeredStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}
        {index + 1 >= totalQuestions ? (
          <Pressable
            onPress={() =>
              navigation.navigate("ResultScreen", {
                points: points,

                answers: answer,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answeredStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MathQ;

const styles = StyleSheet.create({});
