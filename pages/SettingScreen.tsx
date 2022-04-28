import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import StyledButton from "../components/StyledButton";

type Props = NativeStackScreenProps<ParamListBase>;

const SettingScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Here comes settings</Text>
      <StyledButton label="Back home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default SettingScreen;
