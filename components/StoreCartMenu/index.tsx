import {
  ActivityIndicator,
  Pressable,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import Button from "../Button";
import { Colors } from "@/constants/Colors";

type StoreCartMenuProps = {
  handleDeleteCart: () => void;
  deleting: boolean;
  onPress: () => void;
};

const StoreCartMenu = ({
  handleDeleteCart,
  deleting,
  onPress,
}: StoreCartMenuProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.modalView,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Pressable onPress={handleDeleteCart} style={styles.deleteCartButton}>
        {deleting ? (
          <ActivityIndicator color={theme.error} />
        ) : (
          <Icon name="trash" size={24} color={theme.error} />
        )}
        <ThemedText
          type="button"
          lightColor={theme.error}
          darkColor={theme.error}
        >
          {deleting ? "Deleting cart..." : "Delete cart"}
        </ThemedText>
      </Pressable>
      <Button type="secondary" title="Close" onPress={onPress} />
    </ThemedView>
  );
};

export default StoreCartMenu;

const styles = StyleSheet.create({
  modalView: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 48,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    gap: 8,
  },

  deleteCartButton: {
    height: 56,
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
