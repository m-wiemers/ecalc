import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import appStyles from "./styles/appStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./pages/HomeScreen";
import SettingScreen from "./pages/SettingScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ title: "eCalc" }}>
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={{ title: "Settings" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
