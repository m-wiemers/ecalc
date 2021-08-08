import { StyleSheet } from "react-native";

export const section = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});

const theme = {
  colors: {
    blue: {
      _100: "#8DD4F7",
      _200: "#5DBBF1",
      _300: "#2DA2EA",
      _400: "#1778D7",
      _500: "#004EC4",
      _600: "#0049BE",
      _700: "#0044B7",
    },
    grey: {
      _100: "#FFFFFF",
      _200: "#F1F4FA",
      _300: "#8A8B8E",
      _400: "#565758",
      _500: "#3C3D3D",
      _600: "#292929",
      _700: "#222222",
    },
    warning: {
      _100: "#D28492",
      _200: "#CD7887",
      _300: "#C86A7B",
      _400: "#C35B6E",
      _500: "#BD4B60",
      _600: "#B63950",
      _700: "#CC0000",
    },
    green: {
      _100: "#A4FFA4",
      _200: "#95FF95",
      _300: "#87FF87",
      _400: "#78FF78",
      _500: "#69FF69",
      _600: "#5AFF5A",
      _700: "#00FF00",
    },
  },
};

export default theme;
