import { Pressable, StyleSheet } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";

type GhostButtonProps = {
  title?: string;
  icon?: string;
  onPress?: () => void;
  color?: string;
  underline?: boolean;
};

const GhostButton = ({
  title,
  icon,
  onPress,
  color,
  underline,
}: GhostButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          justifyContent: icon ? "space-between" : "center",
        },
      ]}
      onPress={onPress}
    >
      <ThemedText
        type="button"
        style={[
          {
            color: color || "#16A34A",
            textDecorationLine: underline ? "underline" : "none",
          },
        ]}
      >
        {title}
      </ThemedText>

      {icon && <Icon name={icon} size={24} color="white" />}
    </Pressable>
  );
};

export default GhostButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});
