import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import TextField from "../TextField";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type SearchAddressBarProps = {
  autoFocus?: boolean;
};

const SearchAddressBar = ({ autoFocus }: SearchAddressBarProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.searchBar,
        {
          backgroundColor: theme.gray100,
          borderColor: theme.gray200,
        },
      ]}
    >
      <TextField placeholder="Enter Address" autoFocus={autoFocus} search />
    </ThemedView>
  );
};

export default SearchAddressBar;

const styles = StyleSheet.create({
  searchBar: {
    padding: 6,
    borderRadius: 8,
    borderWidth: 0.5,
  },
});
