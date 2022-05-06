import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../../styles/colors";
import OwnSwitch, { OwnSwitchProps } from "../atoms/OwnSwitch";

type Props = {
  label?: string;
  underline?: string;
};

const StyledSwitch = ({
  label,
  underline,
  press,
  ...props
}: Props & OwnSwitchProps) => {
  return (
    <View style={Styles.container}>
      {label && <Text style={Styles.label}>{label}</Text>}
      <OwnSwitch press={press} {...props} />
      {underline && <Text style={Styles.underline}>{underline}</Text>}
    </View>
  );
};

export default StyledSwitch;

const Styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    alignItems: "center",
  },
  label: {
    color: color.indigo._500,
    fontSize: 15,
  },
  underline: {
    color: color.grey._300,
    textAlign: "center",
    fontSize: 10,
  },
});
