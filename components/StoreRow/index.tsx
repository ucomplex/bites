import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { Image } from "expo-image";
import { ThemedText } from "../ThemedText";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";

type StoreProps = {
  title?: string;
  titleType?: "default" | "defaultSemiBold" | "title" | "titleSemiBold" | "titleSmallSemiBold" | "subtitle" | "heading" | "headingSemiBold" | "headingBold" | "titleSmallBold" | "subheading" | "body" | "bodySmall" | "callout" | "calloutSemiBold" | "calloutSmall" | "calloutSmallMedium" | "calloutSmallBold" | "footnote" | "footnoteMedium" | "caption" | "captionMedium" | "captionSemiBold" | "link" | "button";
  subtitle?: string;
  store: Store;
  icon?: string | boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: any;
};

type Store = {
  id: string | number;
  name: string;
  image: string;
  delivery: number | string;
  distance: number | string;
};

const StoreRow = ({
  title,
  titleType,
  subtitle,
  store,
  icon = true,
  onPress,
  disabled,
  style,
}: StoreProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      style={[styles.storeRow, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <ThemedView style={styles.storeRowBrand}>
        <Image source={store.image} style={styles.storeImage} />

        <ThemedView style={styles.storeRowTitle}>
          <ThemedText type={titleType || "calloutSmallMedium"}>
            {title || store.name}
          </ThemedText>

          {subtitle ? (
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              {subtitle}
            </ThemedText>
          ) : (
            <ThemedView style={styles.storeRowDelivery}>
              <Icon name="flash" size={16} color={theme.success600} />
              <ThemedText
                type="footnote"
                lightColor={theme.success600}
                darkColor={theme.success600}
              >
                {store.delivery} min
              </ThemedText>
              <ThemedText type="footnote">•</ThemedText>
              <ThemedText type="footnote">{store.distance} mi</ThemedText>
            </ThemedView>
          )}
        </ThemedView>
      </ThemedView>

      {icon && <Icon name="chevron_right" size={24} color={theme.gray500} />}
    </Pressable>
  );
};

export default StoreRow;

const styles = StyleSheet.create({
  storeRow: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  storeRowBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  storeRowTitle: {
    gap: 4,
  },

  storeRowDelivery: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  storeImage: {
    width: 48,
    height: 48,
  },
});
