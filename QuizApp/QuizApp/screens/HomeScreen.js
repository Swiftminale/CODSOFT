import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Menu from '../components/Menu'
import HomeContainer from '../components/HomeContainer'
import styles from '../styles/HomeScreenStyles'
const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/img/Exams.png')}
      />
      <View style={styles.quizRull}>
        <Text style={styles.textQ}>
          Quiz Rules
        </Text>
      </View>
      <HomeContainer/>

      <Menu/>
     
    </View>

  )
}

export default HomeScreen
