import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

type DeliveryTimeRowProps = {
  time: {
    icon: string;
    label: string;
    duration: string;
    price: string;
    navigation?: boolean;
  };
  deliveryTime: {
    label: string;
    duration: string;
    price: string;
  };
  onPress: () => void;
};

const DeliveryTimeRow = ({
  time,
  deliveryTime,
  onPress,
}: DeliveryTimeRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      key={time.label}
      onPress={onPress}
      style={[
        styles.deliveryTimeRow,
        {
          borderColor:
            deliveryTime.label === time.label ? theme.text : theme.gray200,
        },
      ]}
    >
      <ThemedView style={styles.deliveryTimeTitle}>
        <Icon name={time.icon} size={24} color={theme.icon} />

        <ThemedView style={styles.deliveryTimeColumn}>
          <ThemedText
            type="calloutSmall"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            {time.label}
          </ThemedText>

          <ThemedView style={styles.deliveryTimeIconView}>
            <ThemedText type="callout">{time.duration}</ThemedText>

            {time.label === "Later" && (
              <Icon name="chevron_right" size={18} color={theme.icon} />
            )}
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedText
        type="calloutSmall"
        lightColor={theme.gray500}
        darkColor={theme.gray500}
      >
        {time.price}
      </ThemedText>
    </Pressable>
  );
};

export default DeliveryTimeRow;

const styles = StyleSheet.create({
  deliveryTimeRow: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  deliveryTimeTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  deliveryTimeColumn: {
    gap: 4,
  },

  deliveryTimeIconView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
