import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import appStyles from "../styles/appStyles";
import HomeScreen from "../pages/HomeScreen";
import RegisterScreen from "../pages/authes/RegisterScreen";
import EmailVerifyScreen from "../pages/authes/EmailVerify";
import ForgetPasswordScreen from "../pages/authes/ForgetPassword";
import CalcNavigator from "./CalcNavigator";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: appStyles.header,
        contentStyle: appStyles.container,
      }}
    >
      <Stack.Screen
        name="CalcNavigator"
        component={CalcNavigator}
        initialParams={{ loggedIn: false }}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" options={{ title: "eCalc" }}>
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
