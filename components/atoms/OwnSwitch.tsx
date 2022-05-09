import React, { useEffect, useState } from "react";
import { Pressable, View, StyleSheet, PressableProps } from "react-native";
import { useEvent } from "react-native-reanimated";
import color from "../../styles/colors";

export type OwnSwitchProps = PressableProps & {
  press(): void;
  trueFalse?: boolean;
  state: true | false;
};

const OwnSwitch = ({ press, trueFalse, state, ...props }: OwnSwitchProps) => {
  const [isTrue, setIsTrue] = useState<boolean>(state);

  const toggleState = () => {
    setIsTrue(!isTrue);
    press();
  };

  useEffect(() => {
    {
      state == !true ? setIsTrue(true) : setIsTrue(false);
    }
  }, [state, isTrue]);

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
    backgroundColor: color.ok._200,
  },
  stateFalse: {
    backgroundColor: color.grey._200,
  },
});
