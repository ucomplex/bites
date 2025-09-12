import React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";

type AuthHeaderProps = {
  title: string;
  description?: string;
};

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemedView style={styles.header}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Icon
          name="arrow_left"
          size={24}
          color={colorScheme === "light" ? "#111827" : "#FFFFFF"}
        />
      </Pressable>

      <ThemedText type="titleSemiBold">{title}</ThemedText>

      {description && (
        <ThemedText
          type="body"
          lightColor="#6B7280"
          darkColor="#6B7280"
          style={{ marginTop: 8 }}
        >
          {description}
        </ThemedText>
      )}
    </ThemedView>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  backButton: {
    padding: 16,
  },
});
