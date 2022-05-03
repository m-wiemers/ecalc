import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import SettingScreen from "./pages/SettingScreen";
import appStyles from "./styles/appStyles";
import RegisterScreen from "./pages/authes/RegisterScreen";
import EmailVerifyScreen from "./pages/authes/EmailVerify";
import ForgetPasswordScreen from "./pages/authes/ForgetPassword";
import CalcHome from "./pages/CalcHome";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
          <Stack.Screen
            name="Calc"
            component={CalcHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
