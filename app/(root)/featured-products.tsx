import React from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Icon from "@/components/Icon";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import StoreRow from "@/components/StoreRow";
import Product from "@/components/Product";

const { width } = Dimensions.get("window");

const FeaturedProducts = () => {
  const { store, title, products } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;
  const parsedProducts =
    typeof products === "string" ? JSON.parse(products) : [];

  console.log("Parsed products:", parsedProducts);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ThemedView
        style={[
          styles.header,
          {
            backgroundColor: theme.gray100,
            borderColor: theme.gray200,
          },
        ]}
      >
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={styles.backButton}
        >
          <Icon name="arrow_left" size={24} color={theme.icon} />
        </Pressable>

        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>

        <StoreRow store={parsedStore} style={styles.storeRow} />
      </ThemedView>

      <FlatList
        data={parsedProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Product product={item} style={styles.productView} />
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.columnWrapper}
      />
    </ThemedView>
  );
};

export default FeaturedProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: 64,
    borderBottomWidth: 0.5,
  },

  backButton: {
    padding: 16,
  },

  title: {
    paddingHorizontal: 16,
  },

  storeRow: {
    paddingHorizontal: 16,
  },

  content: {
    flexGrow: 1,
    paddingTop: 16,
    paddingBottom: 48,
    paddingHorizontal: 16,
    gap: 16,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  productView: {
    width: width / 2 - 24,
  },
});
