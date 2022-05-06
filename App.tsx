import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import appStyles from "./styles/appStyles";
import HomeNavigator from "./navigators/HomeNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);
const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
