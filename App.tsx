import "react-native-gesture-handler";
import React from "react";
import { Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hier kommt was neues</Text>
  </View>
);

const styles = {
  container: {
    flex: 1,
    padding: 25,
  },
  text: {
    color: "#ff6600",
  },
};

export default App;
