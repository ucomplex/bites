import React from "react";
import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const OlmecaBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.bannerView}>
      <ThemedView style={styles.banner}>
        <Image
          source={require("@/assets/images/olmeca-tequila.webp")}
          style={styles.bannerImage}
        />

        <LinearGradient
          colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <ThemedView>
            <ThemedText
              type="headingBold"
              lightColor={theme.white}
              darkColor={theme.white}
            >
              NUEVO
            </ThemedText>

            <ThemedText
              type="headingBold"
              lightColor={theme.yellow400}
              darkColor={theme.yellow400}
            >
              SABOR PIÑA
            </ThemedText>
          </ThemedView>

          <ThemedView>
            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor: theme.yellow400,
                },
              ]}
            >
              <ThemedText
                type="calloutSmallMedium"
                lightColor={theme.black}
                darkColor={theme.black}
              >
                Shop Now
              </ThemedText>
            </Pressable>

            <ThemedText
              type="caption"
              lightColor={theme.white}
              darkColor={theme.white}
            >
              Evite el exceso.
            </ThemedText>
          </ThemedView>

          <ThemedText
            type="title"
            lightColor={theme.white}
            darkColor={theme.white}
            style={styles.brandName}
          >
            OLMECA
          </ThemedText>
        </LinearGradient>
      </ThemedView>

      <ThemedText
        type="footnote"
        lightColor={theme.gray500}
        darkColor={theme.gray500}
      >
        Sponsored.
      </ThemedText>
    </ThemedView>
  );
};

export default OlmecaBanner;

const styles = StyleSheet.create({
  bannerView: {
    alignItems: "flex-end",
    gap: 4,
  },

  banner: {
    width: 315,
    height: 156,
    borderRadius: 16,
    overflow: "hidden",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  linearGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 4,
  },

  brandName: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
