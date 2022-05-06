import React, { useState } from "react";
import { Pressable, View, StyleSheet, PressableProps } from "react-native";
import color from "../../styles/colors";

export type OwnSwitchProps = PressableProps & {
  press(): void;
  trueFalse?: boolean;
};

const OwnSwitch = ({ press, trueFalse, ...props }: OwnSwitchProps) => {
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const toggleState = () => {
    setIsTrue(!isTrue);
    press();
  };

  return (
    <Pressable onPress={toggleState} {...props}>
      {!trueFalse ? (
        <View style={style.view}>
          <View
            style={
              isTrue ? style.pointLeft : [style.pointLeft, style.pointRight]
            }
          ></View>
        </View>
      ) : (
        <View
          style={
            isTrue
              ? [style.view, style.stateFalse]
              : [style.view, style.stateTrue]
          }
        >
          <View
            style={
              isTrue ? style.pointLeft : [style.pointLeft, style.pointRight]
            }
          ></View>
        </View>
      )}
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
    marginLeft: 25,
  },
  stateTrue: {
    backgroundColor: "green",
  },
  stateFalse: {
    backgroundColor: "red",
  },
});
