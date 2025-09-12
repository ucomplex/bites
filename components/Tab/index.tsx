import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

type TabProps = {
  title: string;
  activeTab: string;
  tabKey: string;
  onPress: () => void;
};

const Tab = ({ title, activeTab, tabKey, onPress }: TabProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.tab,
        {
          borderBottomColor: activeTab === tabKey ? theme.text : theme.gray200,
          borderBottomWidth: 1,
        },
      ]}
    >
      <ThemedText
        type="footnote"
        lightColor={activeTab === tabKey ? theme.text : theme.gray500}
        darkColor={activeTab === tabKey ? theme.text : theme.gray500}
      >
        {title}
      </ThemedText>
    </Pressable>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
