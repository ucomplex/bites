import * as React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, Animated } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const ProcessingPayment = () => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const [loading] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(loading, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      router.replace({
        pathname: "/order-status",
        params: {
          store: JSON.stringify(parsedStore),
        },
      });
    });
  }, [loading, router]);

  return (
    <ThemedView
      safe
      style={[
        styles.container,
        {
          backgroundColor: theme.success600,
        },
      ]}
    >
      <ThemedView style={[styles.content]}>
        <ThemedView
          style={[
            styles.loadingBar,
            {
              backgroundColor: theme.success900,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.loadingIndicator,
              {
                width: loading.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
                backgroundColor: theme.white,
              },
            ]}
          />
        </ThemedView>

        <ThemedText
          type="titleSmallSemiBold"
          lightColor={theme.white}
          darkColor={theme.white}
        >
          Processing your payment...
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default ProcessingPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  loadingBar: {
    width: 148,
    height: 8,
    borderRadius: 5,
  },

  loadingIndicator: {
    height: "100%",
    borderRadius: 5,
  },
});
