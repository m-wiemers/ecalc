import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import CalcHome from "../pages/CalcHome";
import { auth } from "../firebase";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

type Props = NativeStackScreenProps<ParamListBase>;

const CalcNavigator = ({ navigation, route }: Props) => {
  const params: any = route.params;

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => navigation.navigate("Home", { loggedIn: false, id: "" }));
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
      <Drawer.Screen
        name="CalcHome"
        component={CalcHome}
        initialParams={params}
      />
    </Drawer.Navigator>
  );
};

export default CalcNavigator;
