import * as React from "react";
import {
  Pressable,
  useColorScheme,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";
import TextArea from "../TextArea";
import Button from "../Button";
import Checkbox from "../Checkbox";

type InstructionsMenuProps = {
  loading: boolean;
  initialValue: string;
  onSave: (instructions: string) => void;
  onClose: () => void;
};

const InstructionsMenu = ({
  loading,
  initialValue,
  onSave,
  onClose,
}: InstructionsMenuProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [checked, setChecked] = React.useState(false);
  const [tempInstructions, setTempInstructions] = React.useState(initialValue);

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
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={24} color={theme.text} />
        </Pressable>

        <ThemedView style={[styles.textAreaView]}>
          <TextArea
            value={tempInstructions}
            onChange={(text) => setTempInstructions(text)}
            label="Add delivery instructions"
            placeholder="Add access code, best entrance, etc."
          />

          <Checkbox
            label="Leave at my door"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </ThemedView>

        <Button
          loading={loading}
          title="Save"
          onPress={() => {
            onSave(tempInstructions);
          }}
        />
      </ThemedView>
    </KeyboardAvoidingView>
  );
};

export default InstructionsMenu;

const styles = StyleSheet.create({
  modalView: {
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: 24,
  },

  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 16,
  },

  textAreaView: {
    gap: 8,
  },
});
