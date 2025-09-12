import { Pressable, useColorScheme, StyleSheet } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type CheckoutRowProps = {
  type: "route" | "modal";
  icon: string;
  title: string;
  subtitle: string;
  onPress: () => void;
};

const CheckoutRow = ({
  type,
  icon,
  title,
  subtitle,
  onPress,
}: CheckoutRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const MAX_CHARACTERS = 50;

  const truncatedSubtitle =
    subtitle.length > MAX_CHARACTERS
      ? `${subtitle.slice(0, MAX_CHARACTERS)}...`
      : subtitle;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.rowItem,
        {
          borderBottomColor: theme.gray200,
          alignItems: type === "route" ? "flex-start" : "center",
        },
      ]}
    >
      <ThemedView style={styles.rowItemTitle}>
        <Icon name={icon} size={24} color={theme.icon} />
        <ThemedView style={styles.rowItemColumn}>
          <ThemedText type="callout">{title}</ThemedText>
          <ThemedText
            type="calloutSmall"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {truncatedSubtitle}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {type === "route" ? (
        <ThemedText
          type="callout"
          lightColor={theme.success600}
          darkColor={theme.success600}
        >
          Edit
        </ThemedText>
      ) : (
        <Icon name="chevron_right" size={24} color={theme.gray500} />
      )}
    </Pressable>
  );
};

export default CheckoutRow;

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },

  rowItemColumn: {
    gap: 4,
  },

  rowItemTitle: {
    flexDirection: "row",
    gap: 8,
  },
});
