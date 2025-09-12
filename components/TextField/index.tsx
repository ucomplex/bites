import { TextInput, StyleSheet, useColorScheme } from "react-native";
import Icon from "../Icon";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";

type TextFieldProps = {
  label?: string;
  icon?: string;
  search?: boolean;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  autoFocus?: boolean;
  style?: any;
  error?: string;
};

const TextField = ({
  label,
  icon,
  search,
  placeholder,
  value,
  onChangeText,
  style,
  error,
  ...props
}: TextFieldProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={[styles.textFieldView, style]}>
      {label && <ThemedText type="callout">{label}</ThemedText>}

      <ThemedView
        style={[
          styles.textField,
          {
            borderColor: error ? theme.error : theme.gray200,
            backgroundColor: theme.background,
          },
        ]}
      >
        {icon && (
          <Icon
            name={icon}
            size={24}
            color={error ? theme.error : theme.gray500}
          />
        )}

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={error ? theme.error : theme.gray500}
          style={[
            styles.textInput,
            {
              color: theme.text,
            },
          ]}
          {...props}
        />

        {search && (
          <Icon
            name="search"
            size={24}
            color={error ? theme.error : theme.gray500}
            style={styles.searchIcon}
          />
        )}
      </ThemedView>
    </ThemedView>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textFieldView: {
    gap: 8,
  },

  textField: {
    height: 52,
    minHeight: 52,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingLeft: 16,
  },

  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Regular",
  },

  searchIcon: {
    position: "absolute",
    right: 16,
  },
});
