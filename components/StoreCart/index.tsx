import { Image } from "expo-image";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable, useColorScheme, StyleSheet } from "react-native";
import Icon from "../Icon";
import Button from "../Button";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type StoreCartProps = {
  store: any;
  totalItems: number;
  totalPrice: number;
  onPress: () => void;
};

const StoreCart = ({
  store,
  totalItems,
  totalPrice,
  onPress,
}: StoreCartProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.storeCartView,
        {
          borderColor: theme.gray200,
        },
      ]}
    >
      <ThemedView style={styles.storeCart}>
        <Image source={store?.image} style={styles.storeCartImage} />

        <ThemedView style={styles.storeCartName}>
          <ThemedText type="calloutSmallMedium">{store?.name}</ThemedText>

          <ThemedText
            type="footnote"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            {totalItems} item{totalItems !== 1 ? "s" : ""} • MX $
            {totalPrice.toFixed(2)}
          </ThemedText>
        </ThemedView>

        <Pressable onPress={onPress} style={styles.storeCartButton}>
          <Icon name="menu" size={24} color={theme.icon} />
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.storeCartButtonView}>
        <Button
          title="View Cart"
          onPress={() => {
            router.replace({
              pathname: "/cart",
              params: {
                store: JSON.stringify(store),
              },
            });
          }}
        />
        <Button
          type="secondary"
          title="View Store"
          onPress={() => {
            router.replace({
              pathname: "/(root)/store",
              params: {
                store: JSON.stringify(store),
              },
            });
          }}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default StoreCart;

const styles = StyleSheet.create({
  storeCartView: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 16,
    borderWidth: 0.5,
    gap: 16,
  },

  storeCart: {
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  storeCartImage: {
    width: 48,
    height: 48,
  },

  storeCartName: {
    flex: 1,
    gap: 4,
  },

  storeCartButton: {
    padding: 16,
  },

  storeCartButtonView: {
    paddingHorizontal: 16,
    gap: 8,
  },
});
