import React from "react";
import { Text, View } from "react-native";
import StyledButton from "../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

type Props = NativeStackScreenProps<ParamListBase>;

const HomeScreen = ({ navigation, ...props }: Props) => {
  return (
    <View
      {...props}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Welcome here</Text>
      <StyledButton
        label="Go to Details"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default HomeScreen;
