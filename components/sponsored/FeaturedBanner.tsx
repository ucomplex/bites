import { Image } from "expo-image";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { useColorScheme, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const FeaturedBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.banner}>
      <Image
        source={require("@/assets/images/avocados.webp")}
        style={styles.bannerImage}
      />

      <ThemedView
        style={[
          styles.priceTag,
          {
            backgroundColor: theme.success500,
          },
        ]}
      >
        <ThemedText type="caption">ONLY</ThemedText>
        <ThemedText type="calloutSmallBold">$10/KG</ThemedText>
      </ThemedView>

      <ThemedView style={styles.bannerRow}>
        <ThemedView
          style={[
            styles.greenView,
            {
              backgroundColor: theme.success500,
            },
          ]}
        >
          <ThemedText
            type="headingBold"
            lightColor={theme.success950}
            darkColor={theme.success950}
          >
            FRESH AVOCADOS
          </ThemedText>
          <ThemedText
            type="footnote"
            lightColor={theme.success950}
            darkColor={theme.success950}
          >
            Freshly picked avocados from farms.
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={[
            styles.darkGreenView,
            {
              backgroundColor: theme.success950,
            },
          ]}
        >
          <ThemedText
            type="headingBold"
            lightColor={theme.success500}
            darkColor={theme.success950}
            style={styles.orderNowText}
          >
            ORDER{"\n"}NOW
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default FeaturedBanner;

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 232,
    borderRadius: 16,
    overflow: "hidden",
  },

  bannerImage: {
    flex: 1,
    width: "100%",
  },

  bannerRow: {
    flexDirection: "row",
  },

  greenView: {
    flex: 1,
    padding: 16,
    gap: 4,
  },

  darkGreenView: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  orderNowText: {
    textAlign: "center",
  },

  priceTag: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
