import { useColorScheme, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import Icon from "../Icon";
import { useRouter } from "expo-router";
import { useCartStore } from "@/store/useCartStore";

type ProductProps = {
  product: Product;
  style?: any;
};

type Product = {
  id: string | number;
  name: string;
  unit: string;
  price: number | string;
  images: string[];
  store_id: string | number;
};

const Product = ({ product, style }: ProductProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView style={[styles.productView, style]}>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/product",
            params: {
              product: JSON.stringify(product),
            },
          });
        }}
        style={[
          styles.productImageView,
          {
            backgroundColor: theme.gray100,
            borderColor: theme.gray200,
          },
        ]}
      >
        <Image source={product.images?.[0]} style={styles.productImage} />

        <Pressable
          style={[
            styles.addButtonView,
            {
              backgroundColor: theme.opacity,
              borderColor: colorScheme === "light" ? theme.white : theme.black,
            },
          ]}
        >
          <ThemedView
            style={[
              styles.addButton,
              {
                backgroundColor: theme.success600,
              },
            ]}
          >
            <Icon name="plus" size={24} color={theme.white} />
          </ThemedView>
        </Pressable>
      </Pressable>

      <ThemedView style={styles.productTitleView}>
        <ThemedView>
          <ThemedText type="calloutSmallMedium">{product.name}</ThemedText>
          <ThemedText
            type="caption"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            {product.unit}
          </ThemedText>
        </ThemedView>

        <ThemedText type="calloutSemiBold">
          $
          {typeof product.price === "number"
            ? product.price.toFixed(2)
            : product.price}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default Product;

const styles = StyleSheet.create({
  productView: {
    width: 156,
    gap: 12,
  },

  productTitleView: {
    gap: 4,
  },

  productImageView: {
    width: "100%",
    height: 128,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    overflow: "hidden",
  },

  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  addButtonView: {
    position: "absolute",
    bottom: 8,
    right: 8,
    padding: 4,
    borderRadius: 24,
    borderWidth: 1,
  },

  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
