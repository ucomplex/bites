import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SingleHeader from "@/components/navigation/SingleHeader";
import { Colors } from "@/constants/Colors";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const cards = [
  {
    id: 1,
    icon: "receipt_bill",
    title: "Заказы",
    route: "/orders",
  },
  {
    id: 2,
    icon: "heart",
    title: "Избранное",
    route: "/(root)/favorites",
  },
  {
    id: 3,
    icon: "headphone",
    title: "Помощь",
    route: "/profile",
  },
];

const routes = [
  {
    id: 1,
    icon: "user",
    title: "Личная информация",
    route: "/(root)/personal-information",
  },
  {
    id: 2,
    icon: "location",
    title: "Адреса",
    route: "/(root)/edit-address",
  },
  {
    id: 3,
    icon: "bank_card",
    title: "Способ оплаты",
    route: "/(root)/payment-method",
  },
  {
    id: 4,
    icon: "bell",
    title: "Уведомления",
    route: "/(root)/notifications",
  },
  {
    id: 5,
    icon: "info_circle_stroke",
    title: "О приложении",
    route: "/(root)/about",
  },
];

const Profile = () => {
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
      <SingleHeader title="Profile" />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView style={styles.profileNameView}>
          <ThemedView style={styles.profileName}>
            <ThemedText type="titleSmallSemiBold">Зелимхан Гакаев</ThemedText>
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              1 заказ • 1 час сохранено
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.cardViews}>
            {cards.map((card) => (
              <Pressable
                key={card.id}
                onPress={() => {
                  router.push(card.route as any);
                }}
                style={[
                  styles.cardView,
                  {
                    backgroundColor: theme.gray100,
                    borderColor: theme.gray200,
                  },
                ]}
              >
                <Icon name={card.icon} size={24} color={theme.icon} />
                <ThemedText type="callout">{card.title}</ThemedText>
              </Pressable>
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView>
          {routes.map((route, index) => (
            <Pressable
              key={route.id}
              onPress={() => {
                router.push(route.route as any);
              }}
              style={[
                styles.routeView,
                {
                  borderTopWidth: index === 0 ? 0.5 : 0,
                  borderTopColor: theme.gray200,
                  borderBottomColor: theme.gray200,
                },
              ]}
            >
              <ThemedView style={styles.routeNameRow}>
                <Icon name={route.icon} size={24} color={theme.icon} />
                <ThemedText type="callout">{route.title}</ThemedText>
              </ThemedView>

              <Icon name="chevron_right" size={24} color={theme.gray500} />
            </Pressable>
          ))}
        </ThemedView>

        <Button type="secondary" title="Выйти" style={styles.button} />
      </ScrollView>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  profileNameView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },

  profileName: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  cardViews: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  cardView: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  routeView: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  routeNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  button: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});
