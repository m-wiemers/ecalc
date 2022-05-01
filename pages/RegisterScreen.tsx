import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import StyledButton from "../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { auth } from "../firebase";

type Props = NativeStackScreenProps<ParamListBase>;

const RegisterScreen = ({ navigation, ...props }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        {
          user && alert(`Register Komplett mit ${user.email}`);
        }
        console.log(userCredentials);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      {...props}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Welcome here</Text>
    </View>
  );
};

export default RegisterScreen;
