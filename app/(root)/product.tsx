import React from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import ProductCategoryRow from "@/components/ProductCategoryRow";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ProductHeader from "@/components/navigation/ProductHeader";
import { mock } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSharedValue } from "react-native-reanimated";
import {
  useColorScheme,
  StyleSheet,
  Share,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useCartStore } from "@/store/useCartStore";
import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";
import Footer from "@/components/Footer";

const Product = ({ products = mock.products }) => {
  const { product } = useLocalSearchParams();

  const parsedProduct =
    typeof product === "string" ? JSON.parse(product) : product;

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const imageArray = parsedProduct?.images || [];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const progress = useSharedValue(0);
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const { carts, addItemToCart } = useCartStore();

  const router = useRouter();

  console.log(
    "Carts:",
    carts.map((cart) => ({
      ...cart,
      items: cart.items.map((item) => JSON.stringify(item, null, 2)), // Convert each item to a formatted string
    })),
  );

  const handleAddToCart = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      addItemToCart(parsedProduct.store_id, {
        ...parsedProduct,
        quantity,
      });

      router.back();

      toast.success("Yay! Your item is now in the cart. 🎉🛒", {
        position: ToastPosition.TOP,
        duration: 2500,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this product: ${parsedProduct?.name} for $${parsedProduct?.price.toFixed(
          2,
        )}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const topPicksForYou = products.filter((product) =>
    product.categories.includes(parsedProduct?.categories[0]),
  );

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ProductHeader handleShare={handleShare} />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView
          style={[
            styles.productImageView,
            {
              backgroundColor: theme.gray100,
              borderBottomColor: theme.gray200,
            },
          ]}
        >
          <Carousel
            loop
            width={Dimensions.get("window").width}
            height={375}
            autoPlayInterval={2000}
            snapEnabled
            pagingEnabled
            data={imageArray}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setActiveIndex(index)}
            onProgressChange={(offsetProgress) =>
              (progress.value = offsetProgress)
            }
            renderItem={({ item }: { item: any }) => (
              <Image source={item} style={styles.productImage} />
            )}
          />

          <ThemedView style={[styles.slideIndicators]}>
            {imageArray.map((_: any, index: number) => (
              <ThemedView
                key={index}
                style={[
                  styles.slideIndicator,
                  {
                    width: activeIndex === index ? 24 : 5,
                    backgroundColor:
                      activeIndex === index ? theme.icon : theme.gray300,
                  },
                ]}
              />
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView style={[styles.productInfo]}>
          <ThemedView style={styles.productName}>
            <ThemedText type="titleSmallSemiBold">
              {parsedProduct?.name}
            </ThemedText>
            <ThemedText
              type="caption"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              {parsedProduct?.unit}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.productPrice}>
            <ThemedText type="titleSmallSemiBold">
              ${parsedProduct?.price.toFixed(2)}
            </ThemedText>

            {parsedProduct?.quantity > 0 ? (
              <ThemedView
                style={[
                  styles.inStock,
                  {
                    backgroundColor: theme.gray100,
                    borderColor: theme.gray200,
                  },
                ]}
              >
                <ThemedText type="captionMedium" lightColor={theme.success600}>
                  •
                </ThemedText>

                <ThemedText type="captionMedium">In stock</ThemedText>
              </ThemedView>
            ) : null}
          </ThemedView>
        </ThemedView>

        <ThemedView
          style={[
            styles.productDescription,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          <ThemedText type="callout">Product information</ThemedText>
          <ThemedText
            type="bodySmall"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            {parsedProduct?.description}
          </ThemedText>
        </ThemedView>

        <ProductCategoryRow
          title="Top picks for you"
          products={topPicksForYou}
        />
      </ScrollView>

      <Footer style={styles.footer}>
        <ThemedView
          style={[
            styles.quantityView,
            {
              backgroundColor: theme.gray100,
              borderColor: theme.gray200,
            },
          ]}
        >
          <Pressable
            onPress={handleDecreaseQuantity}
            style={[
              styles.minusButton,
              {
                backgroundColor: theme.background,
              },
            ]}
          >
            <Icon name="minus" size={24} color={theme.text} />
          </Pressable>
          <ThemedText type="calloutSmallMedium">
            {quantity.toString()}
          </ThemedText>
          <Pressable
            onPress={handleIncreaseQuantity}
            style={[
              styles.plusButton,
              {
                backgroundColor: theme.background,
              },
            ]}
          >
            <Icon name="plus" size={24} color={theme.text} />
          </Pressable>
        </ThemedView>
        <Button
          loading={loading}
          title="Добавить в корзину"
          onPress={handleAddToCart}
          style={styles.button}
        />
      </Footer>
    </ThemedView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingBottom: 48,
  },

  productImageView: {
    borderBottomWidth: 0.5,
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: "100%",
  },

  productInfo: {
    padding: 16,
    gap: 16,
  },

  productName: {
    gap: 4,
  },

  productPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inStock: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  productDescription: {
    padding: 16,
    gap: 8,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },

  slideIndicators: {
    position: "absolute",
    bottom: 24,
    flexDirection: "row",
    gap: 8,
  },

  slideIndicator: {
    height: 5,
    borderRadius: 4,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  quantityView: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 6,
  },

  minusButton: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  plusButton: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  button: {
    width: "48%",
  },
});
