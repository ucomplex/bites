import {
  useColorScheme,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Button from "../Button";
import TextField from "../TextField";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type TipAmountMenuProps = {
  loading: boolean;
  onPress: () => void;
};

const TipAmountMenu = ({ loading, onPress }: TipAmountMenuProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ThemedView
        style={[
          styles.modalView,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        <TextField
          label="Other amount"
          placeholder="$0.00"
          keyboardType="numeric"
          autoFocus
        />

        <Button loading={loading} title="Save" onPress={onPress} />
      </ThemedView>
    </KeyboardAvoidingView>
  );
};

export default TipAmountMenu;

const styles = StyleSheet.create({
  modalView: {
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: 24,
  },
});
