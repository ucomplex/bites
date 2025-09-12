import * as React from "react";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";

const EditName = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [name, setName] = React.useState("Capricorn");
  const [lastName, setLastName] = React.useState("Engineering");

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Edit name" />

      <ScrollView contentContainerStyle={styles.content}>
        <TextField placeholder="New name" value={name} onChangeText={setName} />
        <TextField
          placeholder="New last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Button type="secondary" title="Save" />
      </ScrollView>
    </ThemedView>
  );
};

export default EditName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
    gap: 12,
  },
});
