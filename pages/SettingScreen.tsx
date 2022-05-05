import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import StyledButton from "../components/StyledButton";

type Props = NativeStackScreenProps<ParamListBase>;

const SettingScreen = ({ navigation }: Props) => {
  useEffect(() => {
    console.log("Settings");
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#fff" }}>you are logged in with</Text>
      <StyledButton label="Back home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default SettingScreen;
