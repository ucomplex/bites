import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Icon from "@/components/Icon";
import CartHeader from "@/components/navigation/CartHeader";
import { useCartStore } from "@/store/useCartStore";
import CartItem from "@/components/CartItem";
import CartButton from "@/components/CartButton";
import Footer from "@/components/Footer";

const Cart = () => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const { carts, removeItemFromCart, decreaseQuantity, increaseQuantity } =
    useCartStore();

  const [loadingDecreaseId, setLoadingDecreaseId] = React.useState<
    string | null
  >(null);
  const [loadingIncreaseId, setLoadingIncreaseId] = React.useState<
    string | null
  >(null);

  const storeCartItems =
    carts.find((cart) => cart.storeId === parsedStore?.id)?.items || [];

  const totalPrice = storeCartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleDecreaseQuantity = async (item: {
    id: string;
    quantity: number;
  }) => {
    setLoadingDecreaseId(item.id);

    setTimeout(async () => {
      try {
        if (item.quantity === 1) {
          removeItemFromCart(parsedStore?.id, item.id);
        } else {
          decreaseQuantity(parsedStore?.id, item.id);
        }
      } catch (error) {
        console.error("Error decreasing quantity:", error);
      } finally {
        setLoadingDecreaseId(null);
      }
    }, 500);
  };

  const handleIncreaseQuantity = async (item: {
    id: string;
    quantity: number;
  }) => {
    setLoadingIncreaseId(item.id);

    setTimeout(async () => {
      try {
        increaseQuantity(parsedStore?.id, item.id);
      } catch (error) {
        console.error("Error increasing quantity:", error);
      } finally {
        setLoadingIncreaseId(null);
      }
    }, 500);
  };

  const handleCheckout = () => {
    router.push({
      pathname: "/checkout",
      params: {
        store: JSON.stringify(parsedStore),
        cartItems: JSON.stringify(storeCartItems),
        totalPrice,
      },
    });
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <CartHeader parsedStore={parsedStore} />

      {storeCartItems.length === 0 ? (
        <ThemedView style={styles.emptyView}>
          <ThemedView
            style={[
              styles.iconView,
              {
                backgroundColor: theme.gray100,
                borderColor: theme.gray200,
              },
            ]}
          >
            <Icon name="shopping_basket_bold" size={24} color={theme.gray500} />
          </ThemedView>

          <ThemedView style={styles.emptyTitleView}>
            <ThemedText type="titleSmallSemiBold">
              Your cart is empty
            </ThemedText>
            <ThemedText
              type="bodySmall"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              You don't have any items in your cart yet.
            </ThemedText>
          </ThemedView>

          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <ThemedText
              type="button"
              lightColor={theme.success600}
              darkColor={theme.success600}
              style={styles.buttonTitle}
            >
              Shop now
            </ThemedText>
          </Pressable>
        </ThemedView>
      ) : (
        <ScrollView contentContainerStyle={styles.cartItems}>
          <ThemedView style={[styles.titleRow]}>
            <ThemedText type="titleSmallSemiBold">My cart</ThemedText>

            <ThemedView style={styles.titleRowText}>
              <Icon name="flash" size={14} color={theme.success600} />
              <ThemedText
                type="footnote"
                lightColor={theme.success600}
                darkColor={theme.success600}
              >
                {parsedStore?.delivery} min earlist arrival • $4.99 fee
              </ThemedText>
            </ThemedView>
          </ThemedView>

          {storeCartItems.map((item, index) => {
            const productPrice = (item.price * item.quantity).toFixed(2);

            return (
              <CartItem
                key={item.id}
                item={item}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                loadingDecreaseId={loadingDecreaseId}
                loadingIncreaseId={loadingIncreaseId}
                productPrice={productPrice}
                style={{
                  borderColor: theme.gray200,
                  borderTopWidth: 0.5,
                  borderBottomWidth:
                    index === storeCartItems.length - 1 ? 0.5 : 0,
                }}
              />
            );
          })}
        </ScrollView>
      )}

      <Footer>
        <CartButton
          storeCartItems={storeCartItems}
          totalPrice={totalPrice}
          onPress={handleCheckout}
        />

        {storeCartItems.length > 0 && (
          <ThemedText
            type="captionMedium"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
            style={styles.footerText}
          >
            Free delivery + saving $4.12 on this order
          </ThemedText>
        )}
      </Footer>
    </ThemedView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  iconView: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyTitleView: {
    alignItems: "center",
    gap: 8,
  },

  buttonTitle: {
    textDecorationLine: "underline",
  },

  cartItems: {
    paddingBottom: 48,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  titleRowText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  cartItem: {
    flex: 1,
    padding: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
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

  footerText: {
    textAlign: "center",
    marginTop: 8,
  },
});
