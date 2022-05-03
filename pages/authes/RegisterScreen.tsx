import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import StyledButton from "../../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { auth } from "../../firebase";
import Title from "../../components/Title";
import StyledInput from "../../components/StyledInput";

type Props = NativeStackScreenProps<ParamListBase>;

const RegisterScreen = ({ navigation, ...props }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [firstPWError, setFirstPWError] = useState("");
  const [secondPWError, setSecondPWError] = useState("");
  const [notClickable, setNotClickable] = useState<boolean>(true);

  useEffect(() => {
    if (password !== secondPassword) {
      setSecondPWError("Passwörter Stimmem nicht überein");
    } else {
      setSecondPWError("");
    }
    if (secondPassword.length === 0) {
      setSecondPWError("");
    }
  }, [secondPassword]);

  useEffect(() => {
    if (
      email.length > 6 &&
      !firstPWError &&
      !secondPWError &&
      password.length > 6 &&
      secondPassword.length > 6
    ) {
      setNotClickable(false);
    } else {
      setNotClickable(true);
    }
  }, [email, firstPWError, secondPWError]);

  const handlePWBlur = () => {
    if (password.length < 6) {
      setFirstPWError("Mind. 6 Zeichen!");
    }
    if (password.length === 0 || password.length >= 6) {
      setFirstPWError("");
    }
  };

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        user?.sendEmailVerification();
        {
          user &&
            alert(
              `Danke! Bitte Bestätige deine Email-Adresse mit der Email, die wir dir gesendet haben an: ${user.email}`
            );
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View {...props} style={{ flex: 1, alignItems: "center" }}>
      <Title
        text="Jetzt Konto erstellen und alle Vorteile nutzen"
        addStyle={{ textAlign: "center", marginTop: 10 }}
      />

      <StyledInput
        label="Email-Adresse"
        autoCompleteType="email"
        keyboardType="email-address"
        placeholder="deine@email.de"
        value={email}
        onChangeText={(text) => setEmail(text)}
        returnKeyType="next"
      />
      <StyledInput
        label="Passwort"
        placeholder="Passwort"
        value={password}
        errorMessage={firstPWError}
        onBlur={handlePWBlur}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <StyledInput
        label="Passwort wiederholen"
        placeholder="Passwort"
        value={secondPassword}
        errorMessage={secondPWError}
        onChangeText={(text) => setSecondPassword(text)}
        secureTextEntry
      />
      <StyledButton
        label="Kostenlos anmelden"
        onPress={handleSignup}
        disabled={notClickable}
      />
    </View>
  );
};

export default RegisterScreen;
