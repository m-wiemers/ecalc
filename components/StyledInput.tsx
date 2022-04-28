import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CurrencyInput, { CurrencyInputProps } from "react-native-currency-input";
import color from "../styles/colors";

type Props = {
  label?: string;
};

const StyledInput = ({ label, ...props }: Props & CurrencyInputProps) => {
  return (
    <View style={inputStyle.container}>
      {label && <Text style={inputStyle.label}>{label}</Text>}
      <CurrencyInput
        style={inputStyle.input}
        placeholderTextColor={color.grey._400}
        {...props}
      />
    </View>
  );
};

export default StyledInput;

const inputStyle = StyleSheet.create({
  container: {
    display: "flex",
  },
  label: {
    color: "#eee",
    marginLeft: 8,
  },
  input: {
    color: "#eee",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    maxWidth: "90%",
    width: 200,
  },
});
