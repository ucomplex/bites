import { Colors } from "@/constants/Colors";
import { TextInput, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

type TextAreaProps = {
  value: string;
  onChange: (text: string) => void;
  label: string;
  placeholder: string;
};

const TextArea = ({
  value,
  onChange,
  label,
  placeholder,
  ...props
}: TextAreaProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  console.log("Instructions:", value);

  return (
    <ThemedView style={[styles.textAreaView]}>
      <ThemedText type="callout">{label}</ThemedText>

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.gray500}
        multiline={true}
        numberOfLines={4}
        style={[
          styles.textArea,
          {
            borderColor: theme.gray300,
            color: theme.text,
            backgroundColor: theme.gray100,
          },
        ]}
        {...props}
      />
    </ThemedView>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  textAreaView: {
    gap: 8,
  },

  textArea: {
    height: 100,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
});
