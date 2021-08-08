import "react-native-gesture-handler";
import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import InputSection from "./components/InputSection";
import Header from "./components/Header";
import theme from "./theme/Theme";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const App = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      <InputSection type={false} label="Label:" />
      <InputSection type label="Label:" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  text: {
    color: theme.colors.grey._600,
    marginBottom: 20,
  },
});

export default App;
