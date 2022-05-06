import React, { useState } from "react";
import { Pressable, View, StyleSheet, PressableProps } from "react-native";
import color from "../../styles/colors";

type Props = PressableProps & {
  press(): void;
};

const OwnSwitch = ({ press, ...props }: Props) => {
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const toggleState = () => {
    setIsTrue(!isTrue);
    press();
  };

  return (
    <Pressable onPress={toggleState} {...props}>
      <View style={style.view}>
        <View style={isTrue ? style.pointLeft : style.pointRight}></View>
      </View>
    </Pressable>
  );
};

export default OwnSwitch;

const style = StyleSheet.create({
  view: {
    height: 30,
    width: 55,
    backgroundColor: color.grey._300,
    borderColor: color.indigo._600,
    borderWidth: 2,
    borderRadius: 20,
  },
  pointLeft: {
    height: 24,
    width: 24,
    marginTop: 1.1,
    marginLeft: 1,
    backgroundColor: color.indigo._700,
    borderRadius: 50,
  },
  pointRight: {
    height: 24,
    width: 24,
    marginTop: 1.1,
    marginLeft: 25,
    backgroundColor: "green",
    borderRadius: 50,
  },
});
