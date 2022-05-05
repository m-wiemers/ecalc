import React, { useState } from "react";
import { Switch, SwitchProps, StyleSheet, View, Text } from "react-native";
import color from "../../styles/colors";
import globalStyles from "../../styles/global";

type Props = SwitchProps;

const StyledSwitch = ({ ...props }: Props) => {
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsTrue(!isTrue);
  };

  return (
    <View style={toggleStyle.container}>
      <Switch
        trackColor={{ false: color.indigo._700, true: color.indigo._700 }}
        thumbColor={color.grey._200}
        onValueChange={toggleSwitch}
        value={isTrue}
        style={toggleStyle.switch}
        {...props}
      />
      <Text style={toggleStyle.underline}>{isTrue ? "Brutto" : "Netto"}</Text>
    </View>
  );
};

export default StyledSwitch;

const toggleStyle = StyleSheet.create({
  container: {
    width: 60,
    height: 40,
  },
  switch: {
    transform: [
      { scaleX: 1.5 },
      { scaleY: 1.5 },
      { translateX: -6 },
      { translateY: -2 },
    ],
  },
  underline: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.grey._200,
    textAlign: "center",
    marginTop: -10,
  },
});
