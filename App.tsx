import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import appStyles from "./styles/appStyles";
import Card from "./components/Card";
import StyleButton from "./components/Button";
import StyledInput from "./components/StyledInput";

const App = () => {
  const [ek, setEk] = useState<number | null>(null);
  const [vk, setVk] = useState<number | null>(null);
  const [result, setResult] = useState<number | string>("");

  const handleClick = () => {
    if (ek != null && vk != null) {
      const val = vk - ek;
      const reallyRes = parseFloat(val.toString()).toFixed(2).replace(".", ",");

      setResult(reallyRes);
    }
  };

  return (
    <SafeAreaView style={appStyles.container}>
      <Card />
      <StyledInput
        label="Einkaufspreis"
        prefix="€ "
        delimiter="."
        separator=","
        precision={2}
        value={ek}
        onChangeValue={(val) => setEk(val)}
      />
      <StyledInput
        label="Verkaufspreis"
        prefix="€ "
        delimiter="."
        separator=","
        precision={2}
        value={vk}
        onChangeValue={(val) => setVk(val)}
      />
      <StyleButton onPress={handleClick} label="Rechne mal" />
      <Text
        style={{ color: "#fff", marginTop: 20 }}
      >{`dein Ergbnis: ${result} €`}</Text>
    </SafeAreaView>
  );
};

export default App;
