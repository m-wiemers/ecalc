import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import CalcHome from "../pages/CalcHome";
import { auth } from "../firebase";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase, useFocusEffect } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

type Props = NativeStackScreenProps<ParamListBase> & {
  params: {
    loggedIn: boolean;
  };
};

const CalcNavigator = ({ navigation, params }: Props) => {
  const handleLogout = () => {
    auth.signOut().then(() => navigation.navigate("Home"));
  };

  function CustomDrawerContent({ ...props }) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Logout" onPress={handleLogout} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="CalcHome"
    >
      <Drawer.Screen name="CalcHome">
        {(props) => (
          <CalcHome {...props} params={{ loggedIn: params.loggedIn }} />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default CalcNavigator;
