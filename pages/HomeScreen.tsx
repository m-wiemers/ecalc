import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import StyledButton from "../components/StyledButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebase";
import FirebaseAuthTypes from "firebase";

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
      <Text>Welcome here</Text>

      <TextInput
        style={{ backgroundColor: "#fff", borderColor: "#000", padding: 20 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput value={password} onChangeText={(text) => setPassword(text)} />
      <StyledButton label="Login" onPress={handleLogin} />
      <StyledButton label="Register" onPress={handleSignup} />
    </View>
  );
};

export default HomeScreen;
