import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Continue: {
    color: "white",
    textAlign: "center",
  },
  PressableContinue: {
    backgroundColor: "green",
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    marginTop: "auto",
    borderRadius: 5,
  },
  Image: {
    width: "100%",
    height: 250,
    paddingTop: 45,
    resizeMode: "contain",
  },
  ScrollView: {
    backgroundColor: "white",
    height: 300,
    borderRadius: 7,
    marginTop: 20,
  },
  ScoreCard: {
    color: "#0077B6",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
  },
  FirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  FirstRowShare: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  QuestionsAnswerd: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  Item_Question: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  value:{
    fontSize: 25,
    fontWeight:"bold"
  }
});

export default styles;
