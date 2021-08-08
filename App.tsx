import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputSection from "./components/InputSection";
import Header from "./components/Header";
import theme from "./theme/Theme";
import PickerSection from "./components/PickerSection";
import SwitchSection from "./components/SwitchSection";

const items = [
  { label: "label", value: "value" },
  { label: "label 2", value: "value zwei" },
  { label: "label 3", value: "value drei" },
  { label: "label 4", value: "value vier" },
  { label: "label 5", value: "value fünf" },
];

const App = () => {
  const [category, setCategory] = useState<string | number>(items[0].label);
  const [isPrivate, setIsPrivate] = useState(true);
  const toggleSwitch = () => setIsPrivate((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <InputSection label="Label" />
        <InputSection withBackground label="Label" />
        <PickerSection
          label="Label"
          pickerItems={items}
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        />
        <SwitchSection
          trackColor={{
            false: theme.colors.grey._300,
            true: theme.colors.green._100,
          }}
          label="Privatverkäufer"
          isTrue={isPrivate}
          value={isPrivate}
          onValueChange={toggleSwitch}
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
