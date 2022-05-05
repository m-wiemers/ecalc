import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CurrencyInput, { CurrencyInputProps } from "react-native-currency-input";
import color from "../../styles/colors";

type Props = {
  label?: string;
};

const StyledCurrencyInput = ({
  label,
  ...props
}: Props & CurrencyInputProps) => {
  return (
    <View style={inputStyle.container}>
      {label && <Text style={inputStyle.label}>{label}</Text>}
      <CurrencyInput
        style={inputStyle.input}
        placeholderTextColor={color.grey._300}
        textAlign="right"
        suffix=" €"
        {...props}
      />
    </View>
  );
};

export default StyledCurrencyInput;

const inputStyle = StyleSheet.create({
  container: {
    display: "flex",
  },
  label: {
    color: "#eee",
    marginLeft: 8,
  },
  input: {
    color: color.indigo._700,
    fontSize: 20,
    borderColor: color.indigo._600,
    backgroundColor: color.grey._100,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    maxWidth: "90%",
    width: 200,
  },
});
