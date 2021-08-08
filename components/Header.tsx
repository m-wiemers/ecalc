import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme/Theme";

const Header = (): JSX.Element => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blue._700,
    height: 70,
  },
});

export default Header;
