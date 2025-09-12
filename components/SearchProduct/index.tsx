import React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type ProductProps = {
  product: Product;
};

type Product = {
  id: string | number;
  name: string;
  images: string[];
  quantity: number;
};

const SearchProduct = ({ product }: ProductProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const inStock = product.quantity > 0;

  const router = useRouter();

  return (
    <Pressable
      style={styles.productView}
      onPress={() => {
        router.push({
          pathname: "/product",
          params: {
            product: JSON.stringify(product),
          },
        });
      }}
      disabled={!inStock}
    >
      <ThemedView
        style={[
          styles.productImageView,
          {
            backgroundColor: theme.gray100,
            borderColor: theme.gray200,
          },
        ]}
      >
        <Image source={product.images?.[0]} style={styles.productImage} />
      </ThemedView>

      <ThemedView>
        <ThemedText type="calloutSmall" numberOfLines={1} ellipsizeMode="tail">
          {product.name}
        </ThemedText>
        <ThemedText
          type="captionMedium"
          lightColor={inStock ? theme.success600 : theme.error}
          darkColor={inStock ? theme.success600 : theme.error}
        >
          •{" "}
          <ThemedText type="captionMedium">
            {inStock ? "In stock" : "Out of stock"}
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  productView: {
    width: 80,
    gap: 8,
  },

  productImageView: {
    width: "100%",
    height: 80,
    borderRadius: 8,
  },

  productImage: {
    width: "100%",
    height: "100%",
  },
});
