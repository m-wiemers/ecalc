import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../styles/colors";
import Title from "./Title";

const Card = () => {
  return (
    <View style={cardStyles.container}>
      <Title difStyle={cardStyles.title}>Hier kommt der Titel!</Title>
      <Text style={cardStyles.text}>
        Hier kommt ein bisschen Text, der hoffentlich lang genug ist alles
        auszufüllen - zumindest bis zur zweiten Zeile
      </Text>
    </View>
  );
};

export default Card;

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: color.indigo._700,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 20,
    marginBottom: 10,
    color: color.indigo._100,
  },
  text: {
    color: color.grey._100,
  },
});
