import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import StyledButton from "../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { auth } from "../firebase";
import StyledInput from "../components/StyledInput";
import Title from "../components/Title";
import globalStyles from "../styles/global";
import LinkText from "../components/LinkText";

type Props = NativeStackScreenProps<ParamListBase>;

const HomeScreen = ({ navigation, ...props }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notClickable, setNotClickable] = useState(true);

  auth.onAuthStateChanged((user) => {
    const userIsVerified = auth.currentUser?.emailVerified;
    if (user && userIsVerified) {
      navigation.navigate("CalcNavigator", { loggedIn: true });
    }
  });

  useEffect(() => {
    {
      email.length < 6 || password.length < 6
        ? setNotClickable(true)
        : setNotClickable(false);
    }
  }, [email, password]);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (auth.currentUser?.emailVerified) {
          navigation.navigate("CalcNavigator", { loggedIn: true });
        } else {
          console.log("not verified");
          const emailAdress = auth.currentUser?.email;
          navigation.navigate("Email Verify", { email: emailAdress });
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View {...props} style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
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
        disabled={notClickable}
      />
      <LinkText
        label="Passwort vergessen"
        onPress={() => navigation.navigate("Forget Password")}
      />
      <Text style={[globalStyles.underline, { marginTop: 40 }]}>
        Noch kein Konto?
      </Text>
      <StyledButton
        label="Anmelden"
        onPress={() => navigation.navigate("Register")}
      />
      <StyledButton
        addStyle={{ marginTop: 20 }}
        label="Ohne Anmeldung weiter"
        onPress={() =>
          navigation.navigate("CalcNavigator", { loggedIn: false })
        }
      />
    </View>
  );
};

export default HomeScreen;
