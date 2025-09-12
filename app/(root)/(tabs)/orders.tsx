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
import { Image } from "expo-image";
import Icon from "@/components/Icon";
import { useRouter } from "expo-router";
import SingleHeader from "@/components/navigation/SingleHeader";

const orders = [
  {
    id: 1,
    logo: require("@/assets/stores/imperio-fresh.png"),
    brand: "Imperio Fresh",
    items: 6,
    total: 24.98,
  },
  {
    id: 2,
    logo: require("@/assets/stores/borcelle-medical.png"),
    brand: "Borcelle Medical",
    items: 3,
    total: 12.99,
  },
];

const Orders = () => {
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
      <SingleHeader title="Orders" />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView>
          {orders.map((order, index) => (
            <Pressable
              key={order.id}
              onPress={() => {
                router.push({
                  pathname: "/order-status",
                });
              }}
              style={[
                styles.orderView,
                {
                  borderBottomWidth: index === orders.length - 1 ? 0 : 0.5,
                  borderBottomColor: theme.gray200,
                },
              ]}
            >
              <ThemedView style={styles.orderBrandView}>
                <Image source={order.logo} style={{ width: 48, height: 48 }} />
                <ThemedView style={styles.orderBrandTitleView}>
                  <ThemedText type="calloutSmallMedium">
                    {order.brand}
                  </ThemedText>
                  <ThemedText
                    type="footnote"
                    lightColor={theme.gray500}
                    darkColor={theme.gray500}
                  >
                    {order.items} Today - ${order.total}
                  </ThemedText>
                </ThemedView>
              </ThemedView>

              <Icon name="chevron_right" size={24} color={theme.gray500} />
            </Pressable>
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 48,
  },

  orderView: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  orderBrandView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  orderBrandTitleView: {
    gap: 4,
  },
});
