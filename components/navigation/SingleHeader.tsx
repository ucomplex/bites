import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useColorScheme, StyleSheet } from "react-native";

type SingleHeaderProps = {
  title: string;
};

const SingleHeader = ({ title }: SingleHeaderProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView>
      <ThemedView
        style={[
          styles.header,
          {
            backgroundColor: theme.gray100,
            borderBottomColor: theme.gray200,
          },
        ]}
      >
        <ThemedText type="heading">{title}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default SingleHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
  },
});
