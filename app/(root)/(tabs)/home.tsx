import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { mock } from "@/constants";
import Category from "@/components/Category";
import HomeHeader from "@/components/navigation/HomeHeader";
import BacardiBanner from "@/components/sponsored/BacardiBanner";
import OlmecaBanner from "@/components/sponsored/OlmecaBanner";
import SpecialBanner from "@/components/sponsored/SpecialBanner";
import DiscountBanner from "@/components/sponsored/DiscountBanner";
import Product from "@/components/Product";
import StoreBanner from "@/components/sponsored/StoreBanner";
import StoreRow from "@/components/StoreRow";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

type Store = {
  id: string | number;
  name: string;
  image: string;
  delivery: number | string;
  distance: number | string;
};

const Home = ({
  stores = mock.stores,
  categories = mock.categories,
  products = mock.products,
}) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const imperioFresh = stores.find((store) => store.id === 3);
  const liceriaFruitSalad = stores.find((store) => store.id === 1);

  const handleStorePress = (store: Store, title: string) => {
    let filteredProducts;

    if (title === "Повседневные товары") {
      filteredProducts = products.filter(
        (product) =>
          product.store_id === store.id ||
          (product.store_id !== store.id && product.featured),
      );
    } else if (title === "Овощи и фрукты") {
      filteredProducts = products.filter(
        (product) => product.store_id === store.id,
      );
    }

    router.push({
      pathname: "/(root)/featured-products",
      params: {
        store: JSON.stringify(store),
        title,
        products: JSON.stringify(filteredProducts),
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
      <HomeHeader />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView style={styles.storesView}>
          <ThemedView style={styles.titleRow}>
            <ThemedText
              type="callout"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              Магазины рядом с вами
            </ThemedText>

            <Pressable>
              <ThemedText
                type="callout"
                lightColor={theme.success600}
                darkColor={theme.success600}
              >
                Смотреть все
              </ThemedText>
            </Pressable>
          </ThemedView>

          <ThemedView style={styles.stores}>
            {stores.map((store) => (
              <Pressable
                key={store.id}
                onPress={() => {
                  router.push({
                    pathname: "/(root)/store",
                    params: {
                      store: JSON.stringify(store),
                    },
                  });
                }}
              >
                <Image
                  source={store.image}
                  style={{
                    width: 52,
                    height: 52,
                  }}
                />
              </Pressable>
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.categoriesView}>
          <ThemedText type="titleSmallSemiBold" style={styles.title}>
            Покупки по категориям
          </ThemedText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categories}
          >
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </ScrollView>
        </ThemedView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.banners}
        >
          <BacardiBanner />
          <OlmecaBanner />
          <SpecialBanner />
          <DiscountBanner />
        </ScrollView>

        <ThemedView
          style={[
            styles.productsView,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          {imperioFresh && (
            <StoreRow
              title="Повседневные товары"
              titleType="titleSmallSemiBold"
              subtitle="От Империо Фреш"
              store={imperioFresh}
              onPress={() => {
                handleStorePress(imperioFresh, "Повседневные товары");
              }}
              style={styles.storeRow}
            />
          )}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.products}
          >
            {products
              .filter((product) => product.store_id === 3)
              .map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.storeCardView}>
          <StoreBanner />
        </ThemedView>

        <ThemedView
          style={[
            styles.productsView,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          {liceriaFruitSalad && (
            <StoreRow
              title="Овощи и фрукты"
              titleType="titleSmallSemiBold"
              subtitle="От Фруктовый салат"
              store={liceriaFruitSalad}
              onPress={() => {
                handleStorePress(liceriaFruitSalad, "Овощи и фрукты");
              }}
              style={styles.storeRow}
            />
          )}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.products}
          >
            {products
              .filter((product) => product.store_id === 1)
              .map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.storesRowsView}>
          <ThemedText type="titleSmallSemiBold">Магазины рядом с вами</ThemedText>

          {stores.map((store, index) => (
            <StoreRow
              key={store.id}
              store={store}
              onPress={() => {
                router.push({
                  pathname: "/(root)/store",
                  params: {
                    store: JSON.stringify(store),
                  },
                });
              }}
              style={{
                borderBottomWidth: index === stores.length - 1 ? 0 : 0.5,
                borderBottomColor: theme.gray200,
              }}
            />
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  storesView: {
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
    gap: 16,
  },

  stores: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoriesView: {
    paddingTop: 12,
    paddingBottom: 12,
    gap: 16,
  },

  title: {
    paddingHorizontal: 16,
  },

  categories: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
  },

  banners: {
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
    gap: 16,
  },

  productsView: {
    paddingTop: 8,
    paddingBottom: 24,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },

  storeRow: {
    paddingHorizontal: 16,
  },

  products: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 16,
  },

  storeCardView: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  storesRowsView: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
