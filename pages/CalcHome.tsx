import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import globalStyles from "../styles/global";
import StyledCurrencyInput from "../components/Inputs/StyledCurrencyInput";
import StyledSwitch from "../components/atoms/StyledSwitch";
const Drawer = createDrawerNavigator();

type Props = NativeStackScreenProps<ParamListBase>;

const CalcHome = ({ navigation, route }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [buyPrice, setBuyPrice] = useState<number | null>(null);
  const [auction, setAuction] = useState<boolean>(false);
  const routeState: any = route.params;

  useEffect(() => {
    if (routeState.loggedIn) {
      setIsLoggedIn(routeState.loggedIn);
      setUserId(routeState.id);
    }
  }, [route]);

  return (
    <SafeAreaView style={calcHomeStyle.container}>
      <Text style={globalStyles.text}>Hallo!</Text>
      <StyledCurrencyInput
        label="Einkaufspreis"
        placeholder="0.00 €"
        value={buyPrice}
        onChangeValue={(val) => setBuyPrice(val)}
      />
      <StyledSwitch />
    </SafeAreaView>
  );
};

export default CalcHome;

const calcHomeStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
});
