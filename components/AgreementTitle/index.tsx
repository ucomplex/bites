import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const AgreementTitle = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable>
      <ThemedText
        type="captionMedium"
        lightColor={theme.gray500}
        darkColor={theme.gray500}
        style={styles.footerTitle}
      >
        By placing your order, you agree to the{" "}
        <ThemedText
          type="captionMedium"
          lightColor={theme.success600}
          darkColor={theme.success600}
        >
          Terms of Service{" "}
        </ThemedText>
        and{" "}
        <ThemedText
          type="captionMedium"
          lightColor={theme.success600}
          darkColor={theme.success600}
        >
          Privacy Policy
        </ThemedText>
        .
      </ThemedText>
    </Pressable>
  );
};

export default AgreementTitle;

const styles = StyleSheet.create({
  footerTitle: {
    textAlign: "center",
    marginTop: 8,
  },
});
