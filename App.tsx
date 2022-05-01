import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import SettingScreen from "./pages/SettingScreen";
import color from "./styles/colors";
import appStyles from "./styles/appStyles";
import RegisterScreen from "./pages/RegisterScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: appStyles.header,
            contentStyle: appStyles.container,
          }}
        >
          <Stack.Screen name="Home" options={{ title: "eCalc" }}>
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={{ title: "Settings" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Registrieren" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
