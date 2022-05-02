import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import StyledButton from "../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { auth } from "../firebase";
import StyledInput from "../components/StyledInput";
import Title from "../components/Title";
import globalStyles from "../styles/global";

type Props = NativeStackScreenProps<ParamListBase>;

const HomeScreen = ({ navigation, ...props }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const onSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Settings");
      }
    });

    return onSubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        {
          user && console.log(user.email);
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      {...props}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Title text="Melde dich an" />

      <StyledInput
        label="Email-Adresse"
        placeholder="deinName@domain.de"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <StyledInput
        label="Passwort"
        placeholder="DeinPasswort"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <StyledButton
        label="Login"
        onPress={handleLogin}
        addStyle={{ marginTop: 20 }}
      />
      <Text style={globalStyles.underline}>Noch kein Konto?</Text>
      <StyledButton
        label="Anmelden"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default HomeScreen;
