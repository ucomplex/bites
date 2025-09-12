import { Pressable, StyleSheet, useColorScheme } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

type ModalHeaderProps = {
  title: string;
};

const ModalHeader = ({ title }: ModalHeaderProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <Pressable
      style={[
        styles.header,
        {
          backgroundColor: theme.gray100,
          borderBottomColor: theme.gray200,
        },
      ]}
      onPress={() => router.back()}
    >
      <Icon name="close" size={24} color={theme.icon} style={styles.icon} />
      <ThemedText type="heading">{title}</ThemedText>
    </Pressable>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },

  icon: {
    position: "absolute",
    left: 16,
  },
});
