import React, { useState } from "react";
import { View, Text, Switch, SwitchProps, StyleSheet } from "react-native";
import { section } from "../theme/Theme";

type SwitchSectionProps = SwitchProps & {
  label?: string;
  isTrue: boolean;
};

const SwitchSection = ({
  label,
  isTrue,
  ...props
}: SwitchSectionProps): JSX.Element => {
  return (
    <View style={section.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.switchcSection}>
        <Switch {...props} />
        <Text style={styles.infoLabel}>{isTrue ? "ja" : "nein"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    maxWidth: 150,
    paddingBottom: 2,
  },
  switchcSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
  },
  infoLabel: {
    paddingBottom: 2,
    paddingRight: 4,
    textAlign: "right",
  },
});

export default SwitchSection;
