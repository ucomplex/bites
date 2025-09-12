import * as React from "react";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";

const EditPhone = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [phone, setPhone] = React.useState("(352) 344-0270");

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Add number" />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView style={[styles.textFieldView]}>
          <TextField value={phone} onChangeText={setPhone} />
          <ThemedText
            type="footnote"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            We will send a text with a verification code. Message and data rates
            may apply.
          </ThemedText>
        </ThemedView>

        <Button title="Continue" />
      </ScrollView>
    </ThemedView>
  );
};

export default EditPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
    gap: 12,
  },

  textFieldView: {
    gap: 8,
  },
});
