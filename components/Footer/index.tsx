import { Colors } from "@/constants/Colors";
import { ThemedView } from "../ThemedView";
import { StyleSheet, useColorScheme } from "react-native";

type FooterProps = {
  children: React.ReactNode;
  style?: any;
};

const Footer = ({ children, style }: FooterProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.footer,
        {
          backgroundColor: theme.background,
          borderColor: theme.gray200,
        },
        style,
      ]}
    >
      {children}
    </ThemedView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    paddingTop: 12,
    paddingBottom: 48,
    paddingHorizontal: 16,
    borderTopWidth: 0.5,
  },
});
