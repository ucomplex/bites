import { useColorScheme, StyleSheet, Pressable } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type CheckboxProps = {
  checked?: boolean;
  label?: string;
  onChange: () => void;
};

const Checkbox = ({ checked = false, label, onChange }: CheckboxProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable onPress={onChange} style={[styles.checkboxView]}>
      <ThemedView
        style={[
          styles.checkbox,
          {
            borderColor: checked ? theme.success600 : theme.gray200,
            backgroundColor: checked ? theme.success600 : theme.background,
          },
        ]}
      >
        {checked && (
          <Icon
            name="checkmark"
            size={16}
            color={checked ? theme.background : theme.success600}
          />
        )}
      </ThemedView>

      {label && <ThemedText type="callout">{label}</ThemedText>}
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
