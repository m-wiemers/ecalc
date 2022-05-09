import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../../styles/colors";
import globalStyles from "../../styles/global";

type Props = {
  label?: string;
};

const HorizontalLine = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.text}>{label}</Text>}
    </View>
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 3,
    backgroundColor: color.indigo._700,
    marginBottom: 20,
  },
  text: {
    position: "absolute",
    backgroundColor: color.indigo._600,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    color: color.grey._100,
    bottom: -7.5,
    fontWeight: "bold",
  },
});
