import React, { useCallback, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import appStyles from "../styles/appStyles";
import HomeScreen from "../pages/HomeScreen";
import RegisterScreen from "../pages/authes/RegisterScreen";
import EmailVerifyScreen from "../pages/authes/EmailVerify";
import ForgetPasswordScreen from "../pages/authes/ForgetPassword";
import CalcNavigator from "./CalcNavigator";
import { auth } from "../firebase";
import { useFocusEffect } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export type UserProps = {
  loggedIn?: boolean;
  id?: string;
};

const HomeNavigator = () => {
  const [userData, setUserData] = useState<UserProps>({
    loggedIn: undefined,
    id: undefined,
  });

  useCallback(() => {
    if (auth.currentUser) {
      const userState = auth.currentUser.emailVerified;
      const id = auth.currentUser.uid;
      setUserData({ loggedIn: userState, id: id });
    }
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      defaultScreenOptions={{ animationTypeForReplace: "pop" }}
      screenOptions={{
        headerStyle: appStyles.header,
        contentStyle: appStyles.container,
      }}
    >
      <Stack.Screen name="CalcNavigator" options={{ headerShown: false }}>
        {(props) => <CalcNavigator {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Home"
        options={{ title: "eCalc" }}
        initialParams={userData}
      >
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Registrieren" }}
      />
      <Stack.Screen name="Email Verify" options={{ title: "Verifizieren" }}>
        {(props) => <EmailVerifyScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Forget Password"
        options={{ title: "Passwort vergessen" }}
      >
        {(props) => <ForgetPasswordScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
