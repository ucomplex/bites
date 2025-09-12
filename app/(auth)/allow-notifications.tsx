import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AuthHeader from "@/components/navigation/AuthHeader";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import GhostButton from "@/components/GhostButton";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Banner from "@/components/Banner";

const AllowNotifications = () => {
  const [loading, setLoading] = React.useState(false);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const handleAllowNotifications = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/share-location");
    }, 2000);
  };

  return (
    <ThemedView safe style={styles.container}>
      <AuthHeader title="Разрешить уведомления" />
      <Banner />

      <ThemedView style={styles.content}>
        <ThemedView style={styles.card}>
          <Icon name="car" size={24} color={theme.icon} />

          <ThemedView style={styles.cardText}>
            <ThemedText type="heading">Статус заказа</ThemedText>
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              Получайте уведомления о статусе ваших последних заказов.
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.card}>
          <Icon name="speaker" size={24} color={theme.icon} />
          <ThemedView style={styles.cardText}>
            <ThemedText type="heading">Announcements and Alerts</ThemedText>
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              Get information on new products, special events, personalized
              recommendations.
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.btns}>
          <Button
            loading={loading}
            title="Turn on notifications"
            onPress={handleAllowNotifications}
          />
          <GhostButton
            title="Maybe later"
            onPress={() => {
              router.push("/share-location");
            }}
            color={theme.text}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default AllowNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  card: {
    padding: 16,
    flexDirection: "row",
    gap: 12,
  },

  cardText: {
    flex: 1,
    gap: 4,
  },

  btns: {
    marginTop: 24,
    gap: 12,
  },
});
