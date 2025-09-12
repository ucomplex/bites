import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";

const StoreBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.banner,
        {
          backgroundColor: theme.background,
          borderColor: theme.gray200,
        },
      ]}
    >
      <ThemedView style={styles.bannerTitleView}>
        <ThemedView style={styles.bannerTitle}>
          <ThemedView style={styles.storesView}>
            <Image
              source={require("@/assets/stores/imperio-fresh.png")}
              style={{
                width: 28,
                height: 28,
              }}
            />
            <ThemedText type="calloutSmallMedium">Imperio Fresh</ThemedText>
          </ThemedView>

          <ThemedText type="title">Make healthy life with us</ThemedText>
          <ThemedText
            type="footnote"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            Always something good here.
          </ThemedText>
        </ThemedView>

        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: theme.success,
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

      <Image
        source={require("@/assets/images/fruits.webp")}
        style={styles.bannerImage}
      />
    </ThemedView>
  );
};

export default StoreBanner;

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 231,
    borderRadius: 16,
    flexDirection: "row",
    borderWidth: 0.5,
    elevation: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  bannerTitleView: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  bannerTitle: {
    gap: 4,
  },

  storesView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  bannerImage: {
    flex: 1,
    height: "100%",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 8,
  },
});
