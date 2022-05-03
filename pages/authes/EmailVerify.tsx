import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import StyledButton from "../../components/StyledButton";
import Title from "../../components/Title";
import { auth } from "../../firebase";

type Props = NativeStackScreenProps<ParamListBase>;

const EmailVerifyScreen = ({ navigation, route }: Props) => {
  const emails: any = route.params;

  const handleEmailVerify = () => {
    auth.currentUser
      ?.sendEmailVerification()
      .then(() => alert(`Email erneut an ${emails?.email} gesendet`))
      .catch((error) => error.message);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Title
        text="Deine Email-Adresse scheint noch nicht verifiziert zu sein"
        addStyle={{ textAlign: "center" }}
      />
      <StyledButton
        label="Bestätigungsmail noch mal senden"
        onPress={handleEmailVerify}
      />
    </View>
  );
};

export default EmailVerifyScreen;
