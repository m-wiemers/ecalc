import { StyleSheet } from "react-native";
import color from "./colors";

const globalStyles = StyleSheet.create({
  text: {
    color: color.indigo._100,
  },
  title: {
    color: color.indigo._100,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  underline: {
    color: color.indigo._100,
    fontSize: 10,
    marginBottom: 3,
  },
});

export default globalStyles;
