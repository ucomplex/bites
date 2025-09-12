import { Image } from "expo-image";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { useColorScheme, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import CartCounter from "../CartCounter";

type CartItemProps = {
  item: Item;
  handleDecreaseQuantity: (item: { id: string; quantity: number }) => void;
  handleIncreaseQuantity: (item: { id: string; quantity: number }) => void;
  loadingDecreaseId: string | null;
  loadingIncreaseId: string | null;
  productPrice: string;
  style?: any;
};

type Item = {
  id: string;
  quantity: number;
  name: string;
  price: number;
  images: string[];
};

const CartItem = ({
  item,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  loadingDecreaseId,
  loadingIncreaseId,
  productPrice,
  style,
}: CartItemProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={[styles.cartItem, style]}>
      <ThemedView
        style={[
          styles.productImageView,
          {
            backgroundColor: theme.gray100,
            borderColor: theme.gray200,
          },
        ]}
      >
        <Image source={item.images?.[0]} style={styles.productImage} />
      </ThemedView>

      <ThemedView style={styles.cartItemName}>
        <ThemedText type="callout">{item.name}</ThemedText>

        <ThemedView style={styles.cartItemRow}>
          <CartCounter
            item={item}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            loadingDecreaseId={loadingDecreaseId}
            loadingIncreaseId={loadingIncreaseId}
          />

          <ThemedView>
            <ThemedText type="callout">${productPrice}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  productImageView: {
    width: 96,
    height: 96,
    borderWidth: 0.5,
    borderRadius: 8,
    overflow: "hidden",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  cartItemName: {
    flex: 1,
    gap: 12,
  },

  cartItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
