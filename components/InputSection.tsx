import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TextInputProps,
} from "react-native";
import theme, { section } from "../theme/Theme";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

type StyleProps = TextInputProps & {
  withBackground?: boolean;
  label?: string;
};

const InputSection = ({
  withBackground,
  label,
  ...props
}: StyleProps): JSX.Element => {
  return (
    <View
      style={[
        section.container,
        { backgroundColor: withBackground ? theme.colors.grey._200 : "#fff" },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    maxWidth: 150,
    paddingBottom: 2,
  },
  input: {
    borderColor: theme.colors.grey._300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 200,
  },
});

export default InputSection;
