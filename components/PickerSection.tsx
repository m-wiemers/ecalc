import React from "react";
import { View, Text, StyleSheet, PickerPropsAndroid } from "react-native";
import { Picker, PickerProps } from "@react-native-picker/picker";
import theme from "../theme/Theme";

type PickerSectionProps = PickerProps & {
  pickerItems: { label: string; value: string }[];
};

const PickerSection = ({
  pickerItems,
  ...props
}: PickerSectionProps): JSX.Element => {
  const pickerItem = pickerItems.map((item) => {
    return (
      <Picker.Item label={item.label} value={item.value} key={item.value} />
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hello</Text>
      <View style={styles.pickerBorder}>
        <Picker
          dropdownIconColor={theme.colors.grey._700}
          style={styles.picker}
          {...props}
        >
          {pickerItem}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    maxWidth: 150,
    paddingBottom: 2,
  },
  picker: {
    color: theme.colors.grey._700,
  },
  pickerBorder: {
    borderWidth: 1,
    borderColor: theme.colors.grey._300,
    borderRadius: 10,
    padding: 5,
    paddingEnd: 0,
    width: 200,
  },
});

export default PickerSection;
