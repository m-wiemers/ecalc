import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../../styles/colors";
import OwnSwitch, { OwnSwitchProps } from "../atoms/OwnSwitch";

type Props = {
  info: string;
};

const TrueFalseSwitch = ({ info, press }: Props & OwnSwitchProps) => {
  return (
    <View style={Styles.container}>
      <OwnSwitch press={press} trueFalse />
      <Text style={Styles.info}>{info}</Text>
    </View>
  );
};

export default TrueFalseSwitch;

const Styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  info: {
    color: color.indigo._400,
    textAlignVertical: "center",
    marginLeft: 10,
    fontSize: 20,
  },
});
