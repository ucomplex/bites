import React from "react";
import { ScrollView, Share, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import BacardiBanner from "@/components/sponsored/BacardiBanner";
import OlmecaBanner from "@/components/sponsored/OlmecaBanner";
import SpecialBanner from "@/components/sponsored/SpecialBanner";
import DiscountBanner from "@/components/sponsored/DiscountBanner";
import { mock } from "@/constants";
import FeaturedBanner from "@/components/sponsored/FeaturedBanner";
import OfferBanner from "@/components/sponsored/OfferBanner";
import ProductCategoryRow from "@/components/ProductCategoryRow";
import CouponBanner from "@/components/sponsored/CouponBanner";
import Modal from "react-native-modal";
import StoreHeader from "@/components/navigation/StoreHeader";
import { useCartStore } from "@/store/useCartStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import CartBubble from "@/components/CartBubble";
import StoreMenu from "@/components/StoreMenu";
import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";

const Store = ({ products = mock.products }) => {
  const { store } = useLocalSearchParams();
  const { carts } = useCartStore();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const [navigated, setNavigated] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const filteredProducts = products.filter(
    (product) => product.store_id === parsedStore.id,
  );

  const bestSellers = filteredProducts.filter((product) =>
    product.categories.includes("Хиты продаж"),
  );

  const fruitsAndVeggies = products.filter((product) =>
    product.categories.includes("Овощи и фрукты"),
  );

  const seafoodAndPlantBased = products.filter((product) =>
    product.categories.includes("Морепродукты и растительные"),
  );

  const dairyAndEggs = products.filter((product) =>
    product.categories.includes("Dairy & Eggs"),
  );

  const cheeses = products.filter((product) =>
    product.categories.includes("Cheeses"),
  );

  const birds = products.filter((product) =>
    product.categories.includes("Birds"),
  );

  const hamAndSausage = products.filter((product) =>
    product.categories.includes("Ham & Sausage"),
  );

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out ${parsedStore.name} on the app!`,
      });

      if (result.action === Share.sharedAction) {
        console.log("Shared successfully");
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.log("Error sharing store", error);
    }
  };

  const handlePressMenuItem = (item: { title: string; route?: string }) => {
    if (item.route) {
      router.push({
        pathname: item.route as any,
        params: {
          store: JSON.stringify(parsedStore),
        },
      });
    } else if (item.title === "Поделиться") {
      handleShare();
    } else if (item.title === "Добавить в избранное") {
      if (isFavorite(parsedStore.id)) {
        removeFavorite(parsedStore.id);

        toast.success("Удалено из избранного", {
          position: ToastPosition.TOP,
          duration: 2500,
        });

        setMenuVisible(false);
      } else {
        addFavorite(parsedStore);

        toast.success("Добавлено в избранное ✨", {
          position: ToastPosition.TOP,
          duration: 2500,
        });

        setMenuVisible(false);
      }
    }
  };

  const getTotalItems = (storeId: number) => {
    return carts.reduce((total, cart) => {
      const items = cart.items.map((item) => {
        return typeof item === "string" ? JSON.parse(item) : item;
      });

      const storeItems = items.filter((item) => item.store_id === storeId);

      return (
        total +
        storeItems.reduce((itemTotal, item) => itemTotal + item.quantity, 0)
      );
    }, 0);
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
      <StoreHeader
        parsedStore={parsedStore}
        setMenuVisible={setMenuVisible}
        navigated={navigated}
        setNavigated={setNavigated}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.banners}
          >
            <SpecialBanner />
            <DiscountBanner />
            <OlmecaBanner />
            <BacardiBanner />
          </ScrollView>
        </ThemedView>

        <ProductCategoryRow title="Best sellers" products={bestSellers} />
        <ProductCategoryRow
          title="Fruits & Vegetables"
          products={fruitsAndVeggies}
        />

        <ThemedView
          style={[
            styles.bannerView,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          <FeaturedBanner />
        </ThemedView>

        <ProductCategoryRow
          title="Seafood & Plant-Based"
          products={seafoodAndPlantBased}
        />
        <ProductCategoryRow title="Dairy & Eggs" products={dairyAndEggs} />

        <ThemedView
          style={[
            styles.bannerView,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          <OfferBanner />
        </ThemedView>

        <ProductCategoryRow title="Cheeses" products={cheeses} />
        <ProductCategoryRow title="Birds" products={birds} />

        <ThemedView
          style={[
            styles.bannerView,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          <CouponBanner />
        </ThemedView>

        <ProductCategoryRow title="Ham & Sausage" products={hamAndSausage} />
      </ScrollView>

      <Modal
        isVisible={menuVisible}
        onBackdropPress={() => setMenuVisible(false)}
        onSwipeComplete={() => setMenuVisible(false)}
        swipeDirection="down"
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <StoreMenu
          handlePressMenuItem={handlePressMenuItem}
          isFavorite={isFavorite}
          parsedStore={parsedStore}
        />
      </Modal>

      <CartBubble
        totalQuantity={getTotalItems(parsedStore.id)}
        parsedStore={parsedStore}
      />
    </ThemedView>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingBottom: 64,
  },

  banners: {
    paddingTop: 24,
    paddingHorizontal: 16,
    gap: 16,
  },

  bannerView: {
    marginTop: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },

  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
});
