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
import { FlipInEasyX } from "react-native-reanimated";
import HorizontalLine from "../components/atoms/HorizontaleLine";
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
          state={tax}
          press={handleBuyPriceSwitch}
        />
      </View>
      <Text style={[globalStyles.text, { marginBottom: 20 }]}>
        {tax ? "Nettopreis: " : "Bruttopreis: "}
        {tax ? ToPrice((buyPrice / 119) * 100) : ToPrice(buyPrice * 1.19)}
      </Text>

      <HorizontalLine label="Optionen" />

      <View style={calcHomeStyle.settingsWrapper}>
        <StyledSwitch
          addStyle={{ width: "50%" }}
          label={privateAc ? "Privat" : "Gewerblich"}
          state={privateAc}
          press={() => setPrivateAc(!privateAc)}
        />
        <StyledSwitch
          addStyle={{ width: "50%" }}
          label={auction ? "Auktion" : "Angebot"}
          state={auction}
          press={() => setAuction(!auction)}
        />
      </View>

      <HorizontalLine label="Zusatzoptionen" />

      <View style={calcHomeStyle.optionsWrapper}>
        <View style={calcHomeStyle.optionsInnerWrapper}>
          <TrueFalseSwitch
            info="Gallerie Plus"
            state={options.gallery}
            press={() => setOptions({ ...options, gallery: !options.gallery })}
          />
          <TrueFalseSwitch
            info="Basispaket"
            state={options.basisPackage}
            press={() =>
              setOptions({ ...options, basisPackage: !options.basisPackage })
            }
          />
          <TrueFalseSwitch
            info="Untertitel"
            state={options.underTitle}
            press={() =>
              setOptions({ ...options, underTitle: !options.underTitle })
            }
          />
          <TrueFalseSwitch
            info="Vorlage"
            state={options.template}
            press={() =>
              setOptions({ ...options, template: !options.template })
            }
          />
        </View>
        <View style={calcHomeStyle.optionsInnerWrapper}>
          <TrueFalseSwitch
            info="2. Kategorie"
            state={options.secondCategorie}
            press={() =>
              setOptions({
                ...options,
                secondCategorie: !options.secondCategorie,
              })
            }
          />
          <TrueFalseSwitch
            info="Feste Startzeit"
            state={options.startTime}
            press={() =>
              setOptions({ ...options, startTime: !options.startTime })
            }
          />
          <TrueFalseSwitch
            info="Mindestpreis"
            state={options.minimumPrice}
            press={() =>
              setOptions({ ...options, minimumPrice: !options.minimumPrice })
            }
          />
          <TrueFalseSwitch
            info="Keine Verkäuferliste"
            state={options.noBuyerList}
            press={() =>
              setOptions({ ...options, noBuyerList: !options.noBuyerList })
            }
          />
        </View>
      </View>
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
    marginBottom: 30,
  },
  optionsWrapper: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
  },
  optionsInnerWrapper: {
    width: "50%",
  },
});
