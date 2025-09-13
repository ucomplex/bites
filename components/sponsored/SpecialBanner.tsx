import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

const SpecialBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.bannerView}>
      <ThemedView
        style={[
          styles.banner,
          {
            backgroundColor: theme.background,
            borderColor: theme.gray200,
          },
        ]}
      >
        <ThemedView style={styles.bannerTitle}>
          <ThemedView>
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              A solo
            </ThemedText>
            <ThemedText
              type="title"
              lightColor={theme.error}
              darkColor={theme.error}
            >
              $159.00
            </ThemedText>
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              Carne de res
            </ThemedText>
          </ThemedView>

          <Pressable
            style={[
              styles.button,
              {
                backgroundColor: theme.error,
              },
            ]}
          >
            <ThemedText
              type="calloutSmallMedium"
              lightColor={theme.white}
              darkColor={theme.white}
            >
              Подробнее
            </ThemedText>
          </Pressable>
        </ThemedView>

        <Image
          source={require("@/assets/images/carne-res.webp")}
          style={styles.bannerImage}
        />
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

export default SpecialBanner;

const styles = StyleSheet.create({
  bannerView: {
    alignItems: "flex-end",
    gap: 4,
  },

  banner: {
    width: 315,
    height: 156,
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

  bannerTitle: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  bannerImage: {
    width: "50%",
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
