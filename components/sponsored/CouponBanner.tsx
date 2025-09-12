import { Image } from "expo-image";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const CouponBanner = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.banner}>
      <Image
        source={require("@/assets/images/chicken-breast.webp")}
        style={styles.bannerImage}
      />

      <ThemedView
        style={[
          styles.couponView,
          {
            backgroundColor: theme.white,
          },
        ]}
      >
        <ThemedView
          style={[
            styles.coupon,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          <ThemedView style={[styles.couponCode]}>
            <ThemedText type="headingSemiBold">COUPON CODE</ThemedText>
            <ThemedText
              type="bodySmall"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              15% de descuento en carnes.
            </ThemedText>

            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor: theme.success600,
                },
              ]}
            >
              <ThemedText
                type="calloutSmallMedium"
                lightColor={theme.white}
                darkColor={theme.white}
              >
                CARNES15
              </ThemedText>
            </Pressable>
          </ThemedView>

          <ThemedView
            style={[
              styles.couponExpiration,
              {
                borderTopColor: theme.gray200,
              },
            ]}
          >
            <ThemedText
              type="caption"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              VALIDO HASTA EL 30 DE OCTUBRE
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default CouponBanner;

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 232,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  bannerImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },

  couponView: {
    padding: 8,
    borderRadius: 8,
  },

  coupon: {
    borderWidth: 1,
    borderStyle: "dashed",
  },

  couponCode: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  couponExpiration: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderTopWidth: 0.5,
  },

  button: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
});
