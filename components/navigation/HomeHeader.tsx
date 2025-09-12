import * as React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import CartIndicator from "../CartIndicator";
import SearchBar from "../SearchBar";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type HomeHeaderProps = {};

const HomeHeader = ({}: HomeHeaderProps) => {
  const [navigated, setNavigated] = React.useState(false);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.header,
        {
          borderBottomColor: theme.gray200,
          backgroundColor: theme.gray100,
        },
      ]}
    >
      <ThemedView style={styles.headerRow}>
        <ThemedView style={styles.headerTitle}>
          <ThemedText
            type="calloutSmall"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            Delivery address
          </ThemedText>
          <Pressable
            style={styles.addressButton}
            onPress={() => {
              router.push("/enter-address");
            }}
          >
            <ThemedText type="callout">987 Cedarwood Avenue</ThemedText>
            <Icon name="chevron_down" size={18} color={theme.icon} />
          </Pressable>
        </ThemedView>

        <CartIndicator />
      </ThemedView>

      <SearchBar
        placeholder="Search for products..."
        onFocus={() => {
          if (!navigated) {
            setNavigated(true);
            router.push("/home-search");
          }
        }}
        onBlur={() => {
          setNavigated(false);
        }}
      />
    </ThemedView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    gap: 16,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    gap: 4,
  },

  addressButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
