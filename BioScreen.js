import React, {Component,View,Button,StyleSheet,Text} from "react-native";

import Header from "./Header3";
import Content from "./Biodata";

export default function HomeScreen() {
  return (
    <View>
        <Header/>
        <Biodata/>
    </View>
  )
}
