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

const ShareLocation = () => {
  const [loading, setLoading] = React.useState(false);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const handleShareLocation = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.replace("/(root)/(tabs)/home");
    }, 2000);
  };

  return (
    <ThemedView safe style={styles.container}>
      <AuthHeader title="Поделиться местоположением" />

      <ThemedView style={styles.content}>
        <ThemedView style={styles.card}>
          <Icon name="location" size={24} color={theme.icon} />

          <ThemedView style={styles.cardText}>
            <ThemedText type="heading">Найти магазины рядом с вами</ThemedText>
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              Посмотрите все магазины, из которых вы можете заказать, поделившись своим местоположением или
              введя конкретный адрес.
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.btns}>
          <Button
            loading={loading}
            title="Поделиться местоположением"
            onPress={handleShareLocation}
          />
          <GhostButton
            title="Введите ваш адрес"
            onPress={() => {
              router.push("/enter-address");
            }}
            color={theme.icon}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default ShareLocation;

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
