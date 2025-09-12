import { useColorScheme, StyleSheet } from "react-native";
import Tab from "../Tab";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type TabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.tabs,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Tab
        title="Information"
        activeTab={activeTab}
        tabKey="information"
        onPress={() => setActiveTab("information")}
      />

      <Tab
        title="Delivery times"
        activeTab={activeTab}
        tabKey="delivery-times"
        onPress={() => setActiveTab("delivery-times")}
      />
    </ThemedView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
  },
});
