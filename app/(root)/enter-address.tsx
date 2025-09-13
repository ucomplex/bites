import React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Icon from "@/components/Icon";
import SearchAddressBar from "@/components/SearchAddressBar";
import { Colors } from "@/constants/Colors";
import ModalHeader from "@/components/navigation/ModalHeader";

const EnterAddress = () => {
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
      <ModalHeader title="Введите адрес" />

      <ThemedView style={styles.content}>
        <SearchAddressBar />
        <Pressable style={styles.button}>
          <Icon name="navigation" size={24} color={theme.icon} />
          <ThemedText type="heading">Use Current Location</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

export default EnterAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  button: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 8,
    gap: 8,
  },
});
