import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import React, {Component} from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tab';
import {useRef, useEffect} from 'react';

// const audioClip = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-clock-beep-988.json');
let alarmTimeout= null;
const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
// audioClip.loop=true;




  export default function App() {

    return (
      <View style={styles.container}>

        <NavigationContainer>
          <Tabs/>
        </NavigationContainer>
      </View>
      
    );
  }


const styles = StyleSheet.create({
  container: {
    marginTop:0,
    flex: 1,
    backgroundColor: 'blue',
  },




  

});
