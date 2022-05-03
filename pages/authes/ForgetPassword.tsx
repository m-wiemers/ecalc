import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import Title from "../../components/Title";
import { auth } from "../../firebase";

type Props = NativeStackScreenProps<ParamListBase>;

const ForgetPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");

  const handlePasswordReset = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => alert(`Wir haben dir eine Email an ${email} gesendet`))
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Title
        text="Du hast dein Passwort vergessen?"
        addStyle={{ textAlign: "center" }}
      />
      <StyledInput
        label="Email-Adresse"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <StyledButton
        label="Passwort zurücksetzen"
        onPress={handlePasswordReset}
      />
    </View>
  );
};

export default ForgetPasswordScreen;
