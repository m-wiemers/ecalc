import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import globalStyles from "../styles/global";
import StyledCurrencyInput from "../components/Inputs/StyledCurrencyInput";
import StyledSwitch from "../components/molecules/StyledSwitch";
import TrueFalseSwitch from "../components/molecules/TrueFalseSwitch";
import { ToPrice } from "../components/helper/PriceHelper";
const Drawer = createDrawerNavigator();

type Props = NativeStackScreenProps<ParamListBase>;

type PriceProps = {
  withTax: number;
  withoutTax: number;
};

const CalcHome = ({ navigation, route }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [tax, setTax] = useState<boolean>(false);
  const [buyPrice, setBuyPrice] = useState<PriceProps>({
    withTax: 0.0,
    withoutTax: 0.0,
  });
  const [auction, setAuction] = useState<boolean>(false);
  const [gallery, setGallery] = useState<boolean>(false);
  const [privateAc, setPrivateAc] = useState<boolean>(false);
  const routeState: any = route.params;

  useEffect(() => {
    if (routeState.loggedIn) {
      setIsLoggedIn(routeState.loggedIn);
      setUserId(routeState.id);
    }
  }, [route]);

  const handleBuyPriceChange = (val: any) => {
    if (val === null) [setBuyPrice({ withoutTax: 0.0, withTax: 0.0 })];
    setBuyPrice({ withoutTax: val, withTax: val * 1.19 });
  };

  return (
    <SafeAreaView style={calcHomeStyle.container}>
      <View style={calcHomeStyle.buyPrice}>
        <StyledCurrencyInput
          label="Einkaufspreis"
          placeholder="0.00 €"
          value={buyPrice.withoutTax}
          onChangeValue={(val) => handleBuyPriceChange(val)}
        />
        <StyledSwitch
          style={calcHomeStyle.taxSwitch}
          underline={tax ? "Brutto" : "Netto"}
          press={() => setTax(!tax)}
        />
      </View>
      <Text style={[globalStyles.text, { marginBottom: 20 }]}>
        {tax ? "Nettopreis: " : "Bruttopreis: "}
        {!tax
          ? ToPrice(buyPrice.withoutTax * 1.19)
          : ToPrice((buyPrice.withoutTax / 119) * 100)}
      </Text>

      <View style={calcHomeStyle.settingsWrapper}>
        <StyledSwitch
          label={privateAc ? "Privat" : "Gewerblich"}
          press={() => setPrivateAc(!privateAc)}
        />
        <StyledSwitch
          label={auction ? "Auktion" : "Angebot"}
          press={() => setAuction(!auction)}
        />
      </View>
      <TrueFalseSwitch
        info="Gallerie Plus"
        press={() => setGallery(!gallery)}
      />
    </SafeAreaView>
  );
};

export default CalcHome;

const calcHomeStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
  buyPrice: {
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  taxSwitch: {
    marginTop: 28,
  },
  settingsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
