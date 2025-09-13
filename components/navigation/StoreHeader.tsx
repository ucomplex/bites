import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { Image } from "expo-image";
import SearchBar from "../SearchBar";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type StoreHeaderProps = {
  parsedStore: any;
  setMenuVisible: any;
  navigated: boolean;
  setNavigated: any;
};

const StoreHeader = ({
  parsedStore,
  setMenuVisible,
  navigated,
  setNavigated,
}: StoreHeaderProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.header,
        {
          backgroundColor: theme.gray100,
          borderBottomColor: theme.gray200,
        },
      ]}
    >
      <ThemedView style={styles.navigationBar}>
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={styles.backButton}
        >
          <Icon name="arrow_left" size={24} color={theme.icon} />
        </Pressable>

        <Image
          source={parsedStore.image}
          style={{
            width: 52,
            height: 52,
          }}
        />

        <Pressable
          onPress={() => {
            setMenuVisible(true);
          }}
          style={styles.menuButton}
        >
          <Icon name="menu" size={24} color={theme.icon} />
        </Pressable>
      </ThemedView>
      <ThemedView style={styles.searchView}>
        <SearchBar
          placeholder="Поиск товаров..."
          onFocus={() => {
            if (!navigated) {
              setNavigated(true);
              router.push({
                pathname: "/store-search",
                params: {
                  store: JSON.stringify(parsedStore),
                },
              });
            }
          }}
          onBlur={() => {
            setNavigated(false);
          }}
        />
      </ThemedView>

      <ThemedView style={[styles.textRow]}>
        <Icon name="flash" size={16} color={theme.success600} />
        <ThemedText
          type="footnote"
          lightColor={theme.success600}
          darkColor={theme.success600}
        >
          {parsedStore.delivery} min earliest arrival ・ $4.99 Fee
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default StoreHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },

  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backButton: {
    padding: 16,
  },

  menuButton: {
    padding: 16,
  },

  searchView: {
    padding: 16,
  },

  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
