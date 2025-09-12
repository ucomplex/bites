import { Pressable, useColorScheme, StyleSheet } from "react-native";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type RoundedButtonProps = {
  icon: string;
  onPress: () => void;
};

const RoundedButton = ({ icon, onPress }: RoundedButtonProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.roundedButton,
        {
          backgroundColor: theme.background,
          borderColor: theme.gray200,
        },
      ]}
    >
      <Icon name={icon} size={24} color={theme.icon} />
    </Pressable>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  roundedButton: {
    width: 56,
    height: 56,
    borderRadius: 56,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
