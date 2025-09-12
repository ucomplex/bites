import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, useColorScheme } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const Welcome = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../../assets/images/woman-shopping.webp")}
        style={styles.image}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      />

      <ThemedView style={styles.content}>
        <ThemedView style={styles.info}>
          <ThemedText
            type="title"
            lightColor={theme.white}
            darkColor={theme.white}
          >
            Свежие продукты,{"\n"}
            Быстрая доставка
          </ThemedText>

          <ThemedText
            type="subtitle"
            lightColor={theme.white}
            darkColor={theme.white}
          >
            Самый простой способ покупать свежие продукты с доставкой прямо к вашей
            двери. Давайте начнем!
          </ThemedText>
        </ThemedView>

        <Button
          title="Продолжить"
          icon="arrow_right"
          onPress={() => {
            router.push("/sign-in");
          }}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 48,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    gap: 24,
  },

  info: {
    gap: 8,
  },
});
