import React from "react";
import { ScrollView, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import SuggestionSearchRow from "@/components/SuggestionSearchRow";
import { mock } from "@/constants";
import StoreRow from "@/components/StoreRow";
import SearchProduct from "@/components/SearchProduct";
import SearchHeader from "@/components/navigation/SearchHeader";

const top_searches = ["молоко", "яйца", "йогурт", "бананы"];

const HomeSearch = ({ stores = mock.stores, products = mock.products }) => {
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

  const filteredProducts = stores
    .map((store) => {
      const matchedProducts = products.filter((product) => {
        const normalizedSearchQuery = searchQuery
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const normalizedProductName = product.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return (
          product.store_id === store.id &&
          normalizedProductName
            .toLowerCase()
            .includes(normalizedSearchQuery.toLowerCase())
        );
      });

      return {
        ...store,
        products: matchedProducts,
      };
    })
    .filter((store) => store.products.length > 0);

  const totalResults = filteredProducts.reduce(
    (acc, store) => acc + store.products.length,
    0,
  );

  const hasResults = searchQuery.length > 0;

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

      <ScrollView>
        {!hasResults && (
          <ThemedView style={styles.suggestions}>
            <ThemedText type="heading" style={styles.title}>
              Recent search
            </ThemedText>
            <ThemedView>
              <SuggestionSearchRow item="milk" icon />
            </ThemedView>
            <ThemedText type="heading" style={styles.title}>
              Top searches
            </ThemedText>
            <ThemedView>
              {top_searches.map((item, index) => (
                <SuggestionSearchRow
                  key={index}
                  item={item}
                  borderBottomWidth={
                    index === top_searches.length - 1 ? 0 : 0.5
                  }
                />
              ))}
            </ThemedView>
          </ThemedView>
        )}

        {hasResults && (
          <ThemedView style={styles.results}>
            <ThemedText type="heading" style={styles.title}>
              {totalResults} result
              {totalResults !== 1 ? "s" : ""}
            </ThemedText>

            <ThemedView>
              {filteredProducts.map((store, index) => (
                <ThemedView
                  key={index}
                  style={[
                    styles.storeResults,
                    {
                      borderTopWidth: 0.5,
                      borderBottomWidth:
                        index === filteredProducts.length - 1 ? 0.5 : 0,
                      borderColor: theme.gray200,
                    },
                  ]}
                >
                  <StoreRow
                    store={store}
                    icon={false}
                    disabled
                    style={styles.storeRowView}
                  />

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.products}
                  >
                    {store.products.map((product, index) => (
                      <SearchProduct key={index} product={product} />
                    ))}
                  </ScrollView>
                </ThemedView>
              ))}
            </ThemedView>
          </ThemedView>
        )}
      </ScrollView>
    </ThemedView>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    paddingHorizontal: 16,
  },

  suggestions: {
    paddingTop: 16,
    gap: 8,
  },

  results: {
    paddingTop: 16,
    gap: 16,
  },

  storeResults: {
    paddingVertical: 24,
    gap: 16,
  },

  storeView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },

  storeRowView: {
    paddingVertical: 0,
    paddingHorizontal: 16,
  },

  storeImage: {
    width: 48,
    height: 48,
  },

  storeRowTitle: {
    gap: 4,
  },

  storeRowDelivery: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  products: {
    paddingHorizontal: 16,
    gap: 16,
  },
});
