import React from "react";
import { FlatList, Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Icon from "@/components/Icon";
import { useLocalSearchParams, useRouter } from "expo-router";
import { mock } from "@/constants";
import StoreRow from "@/components/StoreRow";

const Category = ({ stores = mock.stores }) => {
  const { title } = useLocalSearchParams();

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const groceriesCategory = stores.filter((store) => {
    return typeof title === "string" && store.categories.includes(title);
  });

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ThemedView
        style={[
          styles.header,
          {
            backgroundColor: theme.gray100,
            borderBottomColor: theme.gray200,
          },
        ]}
      >
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={styles.backButton}
        >
          <Icon name="arrow_left" size={24} color={theme.text} />
        </Pressable>

        <ThemedText type="heading">{title}</ThemedText>
      </ThemedView>

      <FlatList
        data={groceriesCategory}
        renderItem={({ item, index }) => {
          return (
            <StoreRow
              store={item}
              onPress={() => {
                router.push({
                  pathname: "/(root)/store",
                  params: {
                    store: JSON.stringify(item),
                  },
                });
              }}
              style={{
                borderBottomWidth: index === stores.length - 1 ? 0 : 0.5,
                borderBottomColor: theme.gray200,
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
      />
    </ThemedView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: 64,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  backButton: {
    padding: 16,
    position: "absolute",
    left: 0,
    bottom: 0,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
});
