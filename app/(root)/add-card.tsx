import * as React from "react";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import TextField from "@/components/TextField";
import { ThemedView } from "@/components/ThemedView";
import ModalHeader from "@/components/navigation/ModalHeader";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useColorScheme, StyleSheet } from "react-native";

const AddCard = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const handleSave = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1000);
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ModalHeader title="Add Card" />

      <ThemedView style={styles.content}>
        <ThemedView style={styles.textFields}>
          <TextField placeholder="Card Number" />
          <ThemedView style={styles.textfieldRows}>
            <TextField placeholder="MM/YY" style={styles.textField} />
            <TextField placeholder="CVV" style={styles.textField} />
          </ThemedView>

          <TextField placeholder="Zip code" />
        </ThemedView>
      </ThemedView>

      <Footer>
        <Button loading={loading} title="Save" onPress={handleSave} />
      </Footer>
    </ThemedView>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  textFields: {
    gap: 8,
  },

  textfieldRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  textField: {
    flex: 1,
  },
});
