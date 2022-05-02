import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  PressableProps,
} from "react-native";
import color from "../styles/colors";

type Props = {
  onPress(): void;
  label: string;
  addStyle?: ViewStyle;
};

const StyledButton = ({
  onPress,
  label,
  addStyle,
  ...props
}: Props & PressableProps) => {
  return (
    <Pressable
      {...props}
      style={[
        buttonStyles.container,
        addStyle && addStyle,
        props.disabled && { backgroundColor: color.grey._100 },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          buttonStyles.text,
          props.disabled && { color: color.grey._300 },
        ]}
      >
        {label}
      </Text>
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
