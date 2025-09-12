import React from "react";
import { Dimensions, FlatList, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import SearchHeader from "@/components/navigation/SearchHeader";
import { mock } from "@/constants";
import Product from "@/components/Product";
import SuggestionSearchRow from "@/components/SuggestionSearchRow";

const { width } = Dimensions.get("window");

const recommendations = [
  "chocolate milk",
  "chocolate milk gallon",
  "yogurt",
  "strawberries",
];

const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const StoreSearch = ({ products = mock.products }) => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  React.useEffect(() => {
    if (searchQuery) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [searchQuery]);

  const normalizedSearchQuery = normalizeString(searchQuery);

  const filteredProducts = products.filter((product) => {
    const normalizedProductName = normalizeString(product.name);
    return (
      product.store_id === parsedStore.id &&
      normalizedProductName.includes(normalizedSearchQuery)
    );
  });

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <SearchHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        loading={loading}
      />

      {searchQuery.length === 0 && (
        <ThemedView style={styles.recommendations}>
          <ThemedText type="heading" style={styles.title}>
            Recommended searches
          </ThemedText>
          <ThemedView>
            {recommendations.map((item, index) => (
              <SuggestionSearchRow
                key={index}
                item={item}
                borderBottomWidth={
                  index === recommendations.length - 1 ? 0 : 0.5
                }
              />
            ))}
          </ThemedView>
        </ThemedView>
      )}

      {searchQuery.length > 0 && (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <Product product={item} style={styles.productView} />
          )}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.columnWrapper}
          ListHeaderComponent={
            <ThemedText type="heading">
              {filteredProducts.length} result
              {filteredProducts.length !== 1 ? "s" : ""}
            </ThemedText>
          }
        />
      )}
    </ThemedView>
  );
};

export default StoreSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  recommendations: {
    paddingTop: 16,
    gap: 8,
  },

  title: {
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
