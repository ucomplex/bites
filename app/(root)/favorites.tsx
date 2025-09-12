import StoreRow from "@/components/StoreRow";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";

const Favorites = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const { favorites } = useFavoritesStore();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Избранное" />
      <ScrollView contentContainerStyle={styles.content}>
        {favorites.length === 0 && (
          <ThemedText type="heading" style={styles.title}>
            Пока нет избранного
          </ThemedText>
        )}

        {favorites.map((store: any, index: number) => (
          <StoreRow
            key={store.id}
            store={store}
            style={{
              borderBottomWidth: index === favorites.length - 1 ? 0 : 0.5,
              borderBottomColor: theme.gray200,
            }}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  title: {
    marginTop: 16,
  },
});
