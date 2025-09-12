import { LinearGradient } from "expo-linear-gradient";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Image } from "expo-image";
import { useColorScheme, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const OfferBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.banner}>
      <LinearGradient
        colors={["rgba(249, 115, 22, 1)", "rgba(194, 65, 12, 1)"]}
        start={[1, 0]}
        end={[0, 0]}
        style={styles.bannerGradient}
      />
      <ThemedView style={styles.bannerTitleView}>
        <ThemedText
          type="title"
          lightColor={theme.white}
          darkColor={theme.white}
        >
          5x2
        </ThemedText>
        <ThemedText
          type="body"
          lightColor={theme.white}
          darkColor={theme.white}
        >
          En bebibas Jumex{"\n"}
          tetra-pack 946 ml
        </ThemedText>
      </ThemedView>

      <Image
        source={require("@/assets/images/jumex.png")}
        style={styles.bannerImage}
      />
    </ThemedView>
  );
};

export default OfferBanner;

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 232,
    borderRadius: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },

  bannerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },

  bannerTitleView: {
    alignItems: "center",
    justifyContent: "center",
  },

  bannerImage: {
    width: 304,
    height: 120,
  },
});
