import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { ThemedText } from "../ThemedText";

type TitleHeaderProps = {
  title: string;
};

const TitleHeader = ({ title }: TitleHeaderProps) => {
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
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={styles.backButton}
      >
        <Icon name="arrow_left" size={24} color={theme.icon} />
      </Pressable>

      <ThemedText type="heading">{title}</ThemedText>
    </ThemedView>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },

  backButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 16,
  },
});
