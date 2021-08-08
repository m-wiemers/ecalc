import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TextInputProps,
} from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

type StyleProps = TextInputProps & {
  type: boolean;
  label: string;
};

const InputSection = ({ type, label, ...props }: StyleProps): JSX.Element => {
  return (
    <View
      style={[styles.container, { backgroundColor: type ? "#c9c9c9" : "#fff" }]}
    >
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    maxWidth: 150,
    paddingBottom: 2,
  },
  input: {
    borderColor: "#999",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 200,
  },
});

export default InputSection;
