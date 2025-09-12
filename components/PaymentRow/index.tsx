import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type PaymentRowProps = {
  icon: string;
  name: string;
  selected?: boolean;
  showArrow?: boolean;
  onPress?: () => void;
  style?: any;
};

const PaymentRow = ({
  icon,
  name,
  selected,
  showArrow = true,
  onPress,
  style,
}: PaymentRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable onPress={onPress} style={[styles.paymentRowView, style]}>
      <ThemedView style={styles.paymentMethodView}>
        <ThemedView
          style={[
            styles.paymentMethodSymbol,
            {
              borderColor: theme.gray200,
            },
          ]}
        >
          <Icon name={icon} size={24} color={theme.icon} />
        </ThemedView>

        <ThemedText type="calloutSmallMedium">{name}</ThemedText>
      </ThemedView>

      {selected ? (
        <Icon name="checkmark" size={24} color={theme.icon} />
      ) : showArrow ? (
        <Icon name="chevron_right" size={24} color={theme.icon} />
      ) : null}
    </Pressable>
  );
};

export default PaymentRow;

const styles = StyleSheet.create({
  paymentRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },

  paymentMethodView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  paymentMethodSymbol: {
    width: 41,
    height: 25,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
  },
});
