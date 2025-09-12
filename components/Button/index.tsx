import {
  Pressable,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

type ButtonProps = {
  type?: "primary" | "secondary" | "danger";
  loading?: boolean;
  title?: string;
  icon?: string;
  onPress?: () => void;
  lightColor?: string;
  darkColor?: string;
  style?: any;
};

const Button = ({
  type,
  loading,
  title,
  icon,
  onPress,
  style,
}: ButtonProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor:
            type === "secondary"
              ? theme.gray100
              : type === "danger"
                ? theme.error
                : theme.success600,
          justifyContent: icon ? "space-between" : "center",
          borderWidth: type === "secondary" ? 1 : 0,
          borderColor: type === "secondary" ? theme.gray200 : "transparent",
        },
        style,
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={theme.white} />
      ) : (
        <>
          <ThemedText
            type="button"
            lightColor={type === "secondary" ? theme.black : theme.white}
            darkColor={type === "secondary" ? theme.black : theme.white}
          >
            {title}
          </ThemedText>

          {icon && (
            <Icon
              name={icon}
              size={24}
              color={type === "secondary" ? theme.black : theme.white}
            />
          )}
        </>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    position: "relative",
    height: 56,
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});
