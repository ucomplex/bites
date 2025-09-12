import React from "react";
import { useColorScheme, StyleSheet } from "react-native";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";

const Banner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.banner,
        {
          backgroundColor: theme.yellow100,
          borderColor: theme.yellow200,
        },
      ]}
    >
      <Icon name="info_circle" size={18} color={theme.yellow600} />
      <ThemedText
        type="body"
        lightColor={theme.yellow600}
        darkColor={theme.yellow600}
        style={styles.bannerText}
      >
        You can modify and turn off individual notifications at any time in
        settings.
      </ThemedText>
    </ThemedView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 8,
  },

  bannerText: {
    flex: 1,
  },
});
