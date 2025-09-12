import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const menu_items = [
  {
    id: 1,
    title: "Add to favorites",
    icon: "heart",
  },
  {
    id: 2,
    title: "Share",
    icon: "share",
  },
  {
    id: 3,
    title: "Store info",
    icon: "info_circle_stroke",
    route: "/store-info",
  },
];

type StoreMenuProps = {
  handlePressMenuItem: (item: any) => void;
  isFavorite: (id: string) => boolean;
  parsedStore: any;
};

const StoreMenu = ({
  handlePressMenuItem,
  isFavorite,
  parsedStore,
}: StoreMenuProps) => {
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
      {menu_items.map((item, index) => (
        <Pressable
          key={item.id}
          onPress={() => handlePressMenuItem(item)}
          style={[
            styles.menuItem,
            {
              borderBottomColor: theme.gray200,
              borderBottomWidth: index === menu_items.length - 1 ? 0 : 0.5,
            },
          ]}
        >
          <Icon
            name={
              item.title === "Add to favorites" && isFavorite(parsedStore.id)
                ? "heart_filled"
                : item.icon
            }
            size={24}
            color={theme.icon}
          />
          <ThemedText type="callout">
            {item.title === "Add to favorites" && isFavorite(parsedStore.id)
              ? "Remove from favorites"
              : item.title}
          </ThemedText>
        </Pressable>
      ))}
    </ThemedView>
  );
};

export default StoreMenu;

const styles = StyleSheet.create({
  modalView: {
    paddingBottom: 48,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 12,
  },
});
