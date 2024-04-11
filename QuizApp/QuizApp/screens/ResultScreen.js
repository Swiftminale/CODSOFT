import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const ResultScreen = () => {
    const route = useRoute();
    const navigation = useNavigation()
    return (

        <SafeAreaView style={{ margin: 50 }}>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text>Your Results</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 14 }}>
                    <Text>Share</Text>
                    <AntDesign style={{ marginLeft: 4 }} name="sharealt" size={18} color="black" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
                <Text>
                    Question Answered
                </Text>
                <Text>
                    (5/5)
                </Text>
            </View>

            <Pressable style={{
                backgroundColor: "white",
                height: 200,
                borderRadius: 7,
                marginTop: 20
            }}>
                <Text style={{
                    color: "#48CAE4",
                    fontSize: 15,
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: 8
                }}>Score Card</Text>
                <FlatList numColumns={2} data={route.params.answers} renderItem={({ item, i }) => (
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>

                        <Text>{item.questions}</Text>
                        {item.answer === true ? (
                            <AntDesign style={{ marginLeft: 5 }} name="checkcircle" size={20} color="green" />
                        ) : (
                            <AntDesign style={{ marginLeft: 5 }} name="closecircle" size={20} color="red" />
                        )}
                    </View>
                )} />


            </Pressable>
            <View style={{
                flex: 1,
                marginTop: 35
            }}>
                <Image style={{
                    width: "100%",
                    height: 250,
                    paddingTop: 45,
                    resizeMode: 'contain',
                }}
                    source={require('../assets/img/Winners-rafiki.png')}
                />
            </View>
            <Pressable
                onPress={() => navigation.navigate("Home")}
                style={{
                    backgroundColor: "green", padding: 8, marginLeft: "auto", marginRight: "auto", marginBottom: 20, marginTop: "auto",

                    borderRadius: 5
                }}>
                <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ResultScreen

const styles = StyleSheet.create({})