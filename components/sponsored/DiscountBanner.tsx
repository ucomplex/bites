import { Image, Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const DiscountBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.bannerView}>
      <ThemedView style={styles.banner}>
        <Image
          source={require("@/assets/images/fruits.webp")}
          style={styles.bannerImage}
        />

        <ThemedView
          style={[
            styles.flag,
            {
              backgroundColor: theme.success600,
            },
          ]}
        >
          <ThemedText
            type="headingBold"
            lightColor={theme.white}
            darkColor={theme.white}
            style={styles.flagText}
          >
            DESCUENTOS{"\n"}ESPECIALES
          </ThemedText>
          <ThemedText
            type="caption"
            lightColor={theme.white}
            darkColor={theme.white}
            style={styles.flagText}
          >
            DESPENSA
          </ThemedText>
        </ThemedView>

        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: theme.orange600,
            },
          ]}
        >
          <ThemedText
            type="calloutSmallMedium"
            lightColor={theme.white}
            darkColor={theme.white}
          >
            Order Now
          </ThemedText>
        </Pressable>
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

export default DiscountBanner;

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

  flag: {
    position: "absolute",
    top: 0,
    left: 16,
    padding: 8,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    gap: 4,
  },

  flagText: {
    textAlign: "center",
  },

  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
});
