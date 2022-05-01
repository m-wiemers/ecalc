import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import color from "../styles/colors";

type Props = {
  onPress(): void;
  label: string;
};

const StyledButton = ({ onPress, label }: Props) => {
  return (
    <Pressable style={buttonStyles.container} onPress={onPress}>
      <Text style={buttonStyles.text}>{label}</Text>
    </Pressable>
  );
};

export default StyledButton;

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: color.indigo._700,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: "70%",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    color: color.grey._100,
    fontSize: 18,
    fontWeight: "bold",
  },
});
