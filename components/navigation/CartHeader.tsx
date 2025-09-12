import React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type CartHeaderProps = {
  parsedStore: {
    image: string;
  };
  onPress?: () => void;
  style?: any;
};

const CartHeader = ({ parsedStore, onPress, style }: CartHeaderProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.header,
        {
          backgroundColor: theme.gray100,
          borderBottomColor: theme.gray200,
        },
        style,
      ]}
    >
      <Pressable
        onPress={() => {
          if (onPress) {
            onPress();
          } else {
            router.back();
          }
        }}
        style={styles.backButton}
      >
        <Icon name="arrow_left" size={24} color={theme.icon} />
      </Pressable>

      <Image
        source={
          parsedStore
            ? parsedStore.image
            : require("@/assets/stores/imperio-fresh.png")
        }
        style={styles.storeImage}
      />
    </ThemedView>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },

  backButton: {
    position: "absolute",
    bottom: 12,
    left: 0,
    padding: 16,
  },

  storeImage: {
    width: 48,
    height: 48,
  },
});
