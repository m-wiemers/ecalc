import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native";
import color from "../styles/colors";

type Props = {
  label?: string;
};

const StyledInput = ({ label, ...props }: Props & TextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={inputStyle.container}>
      {label && <Text style={inputStyle.label}>{label}</Text>}
      <TextInput
        style={[inputStyle.input, isFocused && inputStyle.focus]}
        placeholderTextColor={color.grey._400}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

export default StyledInput;

const inputStyle = StyleSheet.create({
  container: {
    width: "70%",
    marginBottom: 10,
  },
  label: {
    color: "#eee",
    marginLeft: 8,
  },
  input: {
    color: color.grey._100,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  focus: {
    borderColor: color.indigo._700,
  },
});