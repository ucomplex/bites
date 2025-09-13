import * as React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import SearchBar from "../SearchBar";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type SearchHeaderProps = {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  loading: boolean;
};

const SearchHeader = ({
  searchQuery,
  setSearchQuery,
  loading,
}: SearchHeaderProps) => {
  const [focused, setFocused] = React.useState(false);

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
      <Pressable onPress={() => router.back()} style={styles.backBtn}>
        <Icon name="arrow_left" size={24} color={theme.icon} />
      </Pressable>

      <SearchBar
        placeholder="Поиск товаров..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        autoFocus
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={focused}
        loading={loading}
      />
    </ThemedView>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    paddingRight: 16,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },

  backBtn: {
    padding: 16,
  },
});
