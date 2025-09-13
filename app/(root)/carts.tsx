import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ModalHeader from "@/components/navigation/ModalHeader";
import { mock } from "@/constants";
import { Colors } from "@/constants/Colors";
import { useCartStore } from "@/store/useCartStore";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";
import StoreCart from "@/components/StoreCart";
import StoreCartMenu from "@/components/StoreCartMenu";

const Carts = ({ stores = mock.stores }) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const { carts, clearCart } = useCartStore();

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [selectedStoreId, setSelectedStoreId] = React.useState<string | null>(
    null,
  );
  const [deleting, setDeleting] = React.useState(false);

  const handleDeleteCart = () => {
    if (selectedStoreId) {
      setDeleting(true);
      setTimeout(() => {
        clearCart(selectedStoreId);
        setDeleting(false);
        setMenuVisible(false);

        toast.success("Cart deleted successfully", {
          position: ToastPosition.BOTTOM,
          duration: 2000,
        });
      }, 1500);
    }
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
      <ModalHeader title="Корзина" />

      <ScrollView contentContainerStyle={styles.content}>
        {carts.length === 0 ? (
          <ThemedText type="heading">Нет товаров в корзине</ThemedText>
        ) : (
          carts.map((cart) => {
            if (cart.items && cart.items.length > 0) {
              const store = stores.find(
                (store) => store.id === Number(cart.storeId),
              );

              const totalItems = cart.items.reduce(
                (sum, item) => sum + item.quantity,
                0,
              );

              const totalPrice = cart.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0,
              );

              return (
                <StoreCart
                  key={cart.storeId}
                  store={store}
                  totalItems={totalItems}
                  totalPrice={totalPrice}
                  onPress={() => {
                    setSelectedStoreId(cart.storeId);
                    setMenuVisible(true);
                  }}
                />
              );
            }
            return null;
          })
        )}
      </ScrollView>

      <Modal
        isVisible={menuVisible}
        onBackdropPress={() => setMenuVisible(false)}
        onSwipeComplete={() => setMenuVisible(false)}
        swipeDirection="down"
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <StoreCartMenu
          handleDeleteCart={handleDeleteCart}
          deleting={deleting}
          onPress={() => {
            setMenuVisible(false);
          }}
        />
      </Modal>
    </ThemedView>
  );
};

export default Carts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },

  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
});
