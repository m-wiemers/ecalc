import "react-native-gesture-handler";
import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import InputSection from "./components/InputSection";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hier kommt was neues</Text>
    <InputSection type={false} label="Label:" />
    <InputSection type label="Label:" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  text: {
    color: "#ff6600",
    marginBottom: 20,
  },
});

export default App;
