import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingScreen from "./SettingScreen";
const Drawer = createDrawerNavigator();

const CalcHome = ({ ...props }) => {
  return (
    <SafeAreaView>
      <Drawer.Navigator initialRouteName="Settings">
        <Drawer.Screen name="Settings" component={SettingScreen} />
        <Drawer.Screen name="Hello" component={SettingScreen} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default CalcHome;
