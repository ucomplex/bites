import { Tabs } from "expo-router";
import Icon from "@/components/Icon";
import { useColorScheme } from "react-native";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#16A34A",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#030712" : "#FFFFFF",
          borderColor: colorScheme === "dark" ? "#1F2937" : "#E5E7EB",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="receipt_bill" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
