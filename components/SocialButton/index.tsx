import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";

type SocialButtonProps = {
  icon: string;
  title: string;
  color?: string;
};

const SocialButton = ({ icon, title, color }: SocialButtonProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      style={[
        styles.socialButton,
        {
          borderColor: theme.gray200,
        },
      ]}
    >
      <Icon name={icon} size={24} color={color} />

      <ThemedText type="button">{title}</ThemedText>
    </Pressable>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  socialButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
