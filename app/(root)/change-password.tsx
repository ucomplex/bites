import * as React from "react";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";

const ChangePassword = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Change password" />

      <ScrollView contentContainerStyle={styles.content}>
        <TextField placeholder="Current password" />
        <TextField placeholder="New password" />
        <TextField placeholder="Confirm new password" />

        <Button type="secondary" title="Save" />
      </ScrollView>
    </ThemedView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
    gap: 12,
  },
});
