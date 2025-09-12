import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import Radio from "../Radio";

type RadioRowProps = {
  value: string;
  selected: string;
  onPress: () => void;
  titleColor?: string;
};

const RadioRow = ({ value, selected, onPress, titleColor }: RadioRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const parts = value.split("Edit");

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.hourRow,
        {
          borderBottomColor: theme.gray200,
        },
      ]}
    >
      <ThemedText
        type="footnoteMedium"
        lightColor={titleColor || theme.text}
        darkColor={titleColor || theme.text}
      >
        {parts[0]}
        {parts.length > 1 && (
          <ThemedText
            type="footnoteMedium"
            lightColor={theme.success600}
            darkColor={theme.success600}
          >
            Edit
          </ThemedText>
        )}
      </ThemedText>

      <Radio value={value} selected={selected} />
    </Pressable>
  );
};

export default RadioRow;

const styles = StyleSheet.create({
  hourRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
  },
});
