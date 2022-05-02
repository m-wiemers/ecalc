import React, {
  ClassAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  RefObject,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { TextInput, TextInputProps } from "react-native";
import color from "../styles/colors";

type Props = {
  label?: string;
  errorMessage?: string;
  onBlur?(): void;
};

const StyledInput = ({
  label,
  errorMessage,
  onBlur,
  ...props
}: Props & TextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleBlur = () => {
    setIsFocused(false);
    {
      onBlur !== undefined && onBlur();
    }
  };

  return (
    <View style={[inputStyle.container, !errorMessage && { marginBottom: 12 }]}>
      {label && <Text style={inputStyle.label}>{label}</Text>}
      <TextInput
        style={[
          inputStyle.input,
          isFocused && inputStyle.focus,
          !!errorMessage && inputStyle.error,
        ]}
        placeholderTextColor={color.grey._400}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        {...props}
      />
      {!!errorMessage && (
        <Text style={[inputStyle.label, { color: "red" }]}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default StyledInput;

const inputStyle = StyleSheet.create({
  container: {
    width: "70%",
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
  error: {
    borderColor: "red",
  },
});
