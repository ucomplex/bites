import { ScrollView, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import Product from "../Product";

type ProductCategoryRowProps = {
  title: string;
  products: ProductProps[];
};

type ProductProps = {
  id: string | number;
  name: string;
  unit: string;
  price: number | string;
  images: string[];
  store_id: string | number;
};

const ProductCategoryRow = ({ title, products }: ProductCategoryRowProps) => {
  return (
    <ThemedView style={styles.productsView}>
      <ThemedText type="titleSemiBold" style={styles.title}>
        {title}
      </ThemedText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default ProductCategoryRow;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
  },

  productsView: {
    paddingTop: 24,
  },

  products: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 16,
  },
});
