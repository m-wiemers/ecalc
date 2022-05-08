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

type OptionProps = {
  gallery: boolean;
  basisPackage: boolean;
  underTitle: boolean;
  template: boolean;
  secondCategorie: boolean;
  startTime: boolean;
  minimumPrice: boolean;
  noBuyerList: boolean;
};

const CalcHome = ({ navigation, route }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [tax, setTax] = useState<boolean>(false);
  const [buyPrice, setBuyPrice] = useState<number>(0.0);
  const [auction, setAuction] = useState<boolean>(false);
  const [privateAc, setPrivateAc] = useState<boolean>(false);
  const [options, setOptions] = useState<OptionProps>({
    gallery: false,
    basisPackage: false,
    underTitle: false,
    template: false,
    secondCategorie: false,
    startTime: false,
    minimumPrice: false,
    noBuyerList: false,
  });
  const routeState: any = route.params;

  useEffect(() => {
    if (routeState.loggedIn) {
      setIsLoggedIn(routeState.loggedIn);
      setUserId(routeState.id);
    }
  }, [route]);

  const handleBuyPriceSwitch = () => {
    setTax(!tax);
    tax ? setBuyPrice((buyPrice / 119) * 100) : setBuyPrice(buyPrice * 1.19);
  };

  return (
    <SafeAreaView style={calcHomeStyle.container}>
      <View style={calcHomeStyle.buyPrice}>
        <StyledCurrencyInput
          label="Einkaufspreis"
          placeholder="0.00 €"
          value={buyPrice}
          onChangeValue={(val) => setBuyPrice(val ? val : 0.0)}
        />
        <StyledSwitch
          style={calcHomeStyle.taxSwitch}
          underline={tax ? "Brutto" : "Netto"}
          press={handleBuyPriceSwitch}
        />
      </View>
      <Text style={[globalStyles.text, { marginBottom: 20 }]}>
        {tax ? "Nettopreis: " : "Bruttopreis: "}
        {tax ? ToPrice((buyPrice / 119) * 100) : ToPrice(buyPrice * 1.19)}
      </Text>

      <View style={calcHomeStyle.settingsWrapper}>
        <StyledSwitch
          addStyle={{ width: "50%" }}
          label={privateAc ? "Privat" : "Gewerblich"}
          press={() => setPrivateAc(!privateAc)}
        />
        <StyledSwitch
          addStyle={{ width: "50%" }}
          label={auction ? "Auktion" : "Angebot"}
          press={() => setAuction(!auction)}
        />
      </View>
      <TrueFalseSwitch
        info="Gallerie Plus"
        press={() => setOptions({ ...options, gallery: true })}
      />
      <TrueFalseSwitch
        info="Untertitel"
        press={() => setOptions({ ...options, underTitle: true })}
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
    marginBottom: 20,
  },
});
