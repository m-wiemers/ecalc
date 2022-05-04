import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
const Drawer = createDrawerNavigator();

type Props = NativeStackScreenProps<ParamListBase>;

const CalcHome = ({ navigation, route }: Props) => {
  const isLoggedIn: any = route.params;

  console.log(isLoggedIn?.loggedIn);

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
