import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import Icon from "../Icon";

type SuggestionSearchRowProps = {
  item: string;
  icon?: boolean;
  borderBottomWidth?: number;
};

const SuggestionSearchRow = ({
  item,
  icon,
  borderBottomWidth,
}: SuggestionSearchRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      style={[
        styles.button,
        {
          borderBottomWidth: borderBottomWidth,
          borderBottomColor: theme.gray200,
        },
      ]}
    >
      <ThemedText
        type="bodySmall"
        lightColor={theme.gray500}
        darkColor={theme.gray500}
      >
        {item}
      </ThemedText>

      {icon && <Icon name="close" size={24} color={theme.icon} />}
    </Pressable>
  );
};

export default SuggestionSearchRow;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
