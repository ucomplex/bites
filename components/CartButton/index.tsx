import { useColorScheme, StyleSheet, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type CartButtonProps = {
  storeCartItems: any[];
  totalPrice: number | string;
  onPress: () => void;
};

const CartButton = ({
  storeCartItems,
  totalPrice,
  onPress,
}: CartButtonProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor:
            storeCartItems.length === 0 ? theme.gray100 : theme.success600,
          borderColor:
            storeCartItems.length === 0 ? theme.gray200 : "transparent",
        },
      ]}
      disabled={storeCartItems.length === 0}
    >
      <ThemedText
        type="button"
        lightColor={storeCartItems.length === 0 ? theme.gray500 : theme.white}
        darkColor={storeCartItems.length === 0 ? theme.gray500 : theme.white}
      >
        {storeCartItems.length === 0
          ? "$10 Min. to checkout"
          : "Go to checkout"}
      </ThemedText>

      <ThemedView
        style={[
          styles.totalPriceView,
          {
            backgroundColor:
              storeCartItems.length === 0 ? theme.gray200 : theme.success700,
          },
        ]}
      >
        <ThemedText
          type="caption"
          lightColor={storeCartItems.length === 0 ? theme.text : theme.white}
          darkColor={storeCartItems.length === 0 ? theme.text : theme.white}
        >
          ${totalPrice}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  button: {
    height: 48,
    minHeight: 48,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 1,
  },

  totalPriceView: {
    position: "absolute",
    right: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});
