import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingScreen from "./SettingScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

type Props = NativeStackScreenProps<ParamListBase> & {
  params: {
    loggedIn: boolean;
  };
};

const CalcHome = ({ navigation, params }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (!params) {
      <Text style={{ color: "#fff" }}>Loading...</Text>;
    } else {
      setIsLoggedIn(params.loggedIn);
    }
  }, [params]);

  return (
    <SafeAreaView>
      {isLoggedIn ? (
        <Text>du bist eingelogged</Text>
      ) : (
        <Text>Du bist nicht eingelogged :-(</Text>
      )}
    </SafeAreaView>
  );
};

export default CalcHome;
