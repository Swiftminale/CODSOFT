import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import MathQ from './screens/MathQ';
import ICTQ from './screens/ICTQ';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Quiz" component={QuizScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Math" component={MathQ} options={{headerShown:false}}/>
        <Stack.Screen name="ICTQ" component={ICTQ} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})