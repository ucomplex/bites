import {
  ActivityIndicator,
  Pressable,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

type CartCounterProps = {
  item: Item;
  handleDecreaseQuantity: (item: { id: string; quantity: number }) => void;
  handleIncreaseQuantity: (item: { id: string; quantity: number }) => void;
  loadingDecreaseId: string | null;
  loadingIncreaseId: string | null;
};

type Item = {
  id: string;
  quantity: number;
  name: string;
  price: number;
  images: string[];
};

const CartCounter = ({
  item,
  loadingDecreaseId,
  loadingIncreaseId,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: CartCounterProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.counterView,
        {
          borderColor: theme.gray200,
        },
      ]}
    >
      <Pressable
        onPress={() => handleDecreaseQuantity(item)}
        style={styles.counterButton}
      >
        {loadingDecreaseId === item.id ? (
          <ActivityIndicator size="small" color={theme.text} />
        ) : (
          <Icon
            name={item.quantity === 1 ? "delete_bold" : "minus"}
            size={18}
            color={item.quantity === 1 ? theme.error : theme.text}
          />
        )}
      </Pressable>
      <ThemedText type="calloutSmallMedium">{item.quantity}</ThemedText>

      <Pressable
        onPress={() => handleIncreaseQuantity(item)}
        style={styles.counterButton}
      >
        {loadingIncreaseId === item.id ? (
          <ActivityIndicator size="small" color={theme.text} />
        ) : (
          <Icon name="plus" size={18} color={theme.text} />
        )}
      </Pressable>
    </ThemedView>
  );
};

export default CartCounter;

const styles = StyleSheet.create({
  counterView: {
    padding: 4,
    width: 128,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    borderWidth: 0.5,
    borderRadius: 96,
  },

  counterButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
});
