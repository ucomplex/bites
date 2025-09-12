import React from "react";
import { useColorScheme, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useRouter } from "expo-router";
import { useCartStore } from "@/store/useCartStore";

const CartIndicator = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const { carts } = useCartStore();

  const totalCarts = carts.length;

  return (
    <Pressable
      onPress={() => {
        router.push("/(root)/carts");
      }}
      style={styles.cartIndicator}
    >
      {totalCarts > 0 && (
        <ThemedView
          style={[
            styles.cartCounter,
            {
              backgroundColor: theme.success600,
            },
          ]}
        >
          <ThemedText
            type="captionMedium"
            lightColor={theme.white}
            darkColor={theme.white}
          >
            {totalCarts}
          </ThemedText>
        </ThemedView>
      )}

      <Icon name="shopping_basket" size={24} color={theme.icon} />
    </Pressable>
  );
};

export default CartIndicator;

const styles = StyleSheet.create({
  cartIndicator: {
    position: "relative",
  },

  cartCounter: {
    width: 18,
    height: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -6,
    right: -6,
    zIndex: 1,
  },
});
