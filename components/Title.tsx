import React from "react";
import { Text, TextStyle, ViewStyle } from "react-native";
import globalStyles from "../styles/global";

type Props = {
  difStyle?: TextStyle;
  addStyle?: TextStyle | ViewStyle;
  text: string;
};

const Title = ({ difStyle, text, addStyle, ...props }: Props) => {
  return (
    <Text
      style={[
        difStyle ? difStyle : globalStyles.title,
        addStyle && globalStyles.title && addStyle,
      ]}
      {...props}
    >
      {text}
    </Text>
  );
};

export default Title;
