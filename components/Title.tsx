import React from "react";
import { Text, TextStyle } from "react-native";
import globalStyles from "../styles/global";

type Props = {
  difStyle: TextStyle;
  children: string;
};

const Title = ({ difStyle, children, ...props }: Props) => {
  return (
    <Text style={difStyle ? difStyle : globalStyles.title} {...props}>
      {children}
    </Text>
  );
};

export default Title;
