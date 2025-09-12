import { Pressable, StyleSheet, useColorScheme } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type CategoryProps = {
  category: {
    name: string;
    icon: string;
    link: string;
  };
};

const Category = ({ category }: CategoryProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <Pressable
      style={[
        styles.category,
        {
          borderColor: theme.gray200,
        },
      ]}
      onPress={() => {
        router.push({
          pathname: "/(root)/category",
          params: {
            title: category.name,
          },
        });
      }}
    >
      <Icon name={category.icon} size={24} color={theme.icon} />
      <ThemedText type="callout">{category.name}</ThemedText>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
