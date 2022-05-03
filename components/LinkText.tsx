import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
import globalStyles from "../styles/global";

type Props = {
  label: string;
};

const LinkText = ({ label, ...props }: Props & PressableProps) => {
  return (
    <View>
      <Pressable {...props}>
        <Text style={globalStyles.text}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default LinkText;
