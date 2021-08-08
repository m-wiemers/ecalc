import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import InputSection from "./components/InputSection";
import Header from "./components/Header";
import theme from "./theme/Theme";
import PickerSection from "./components/PickerSection";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const items = [
  { label: "label", value: "value" },
  { label: "label 2", value: "value zwei" },
  { label: "label 3", value: "value drei" },
  { label: "label 4", value: "value vier" },
  { label: "label 5", value: "value fünf" },
];

const App = () => {
  const [category, setCategory] = useState<string | number>("");

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <InputSection type={false} label="Label" />
        <InputSection type label="Label" />
        <PickerSection
          pickerItems={items}
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        />
      </View>
    </View>
  );
};

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
