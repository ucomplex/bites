import { Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const BacardiBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.bannerView}>
      <ThemedView style={styles.banner}>
        <Image
          source={require("@/assets/images/bacardi-tropical.webp")}
          style={styles.bannerImage}
        />

        <LinearGradient
          colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <ThemedView style={styles.brand}>
            <ThemedView
              style={[
                styles.brandName,
                {
                  backgroundColor: theme.orange800,
                },
              ]}
            >
              <ThemedText
                type="headingBold"
                lightColor={theme.white}
                darkColor={theme.white}
              >
                BACARDÍ
              </ThemedText>
            </ThemedView>

            <ThemedView
              style={[
                styles.brandFlavor,
                {
                  backgroundColor: theme.white,
                },
              ]}
            >
              <ThemedText
                type="headingBold"
                lightColor={theme.black}
                darkColor={theme.black}
              >
                COCO
              </ThemedText>
            </ThemedView>

            <ThemedText
              type="calloutSmallMedium"
              lightColor={theme.white}
              darkColor={theme.white}
            >
              EL SABOR DEL VERANO
            </ThemedText>
          </ThemedView>

          <ThemedText
            type="caption"
            lightColor={theme.white}
            darkColor={theme.white}
          >
            Evite el exceso.
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

export default BacardiBanner;

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

  brand: {
    alignItems: "flex-start",
  },

  brandName: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  brandFlavor: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
