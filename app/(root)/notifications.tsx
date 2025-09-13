import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView, Switch } from "react-native";

const notifications = [
  {
    title: "Обновления заказа",
    items: [
      {
        id: "push",
        label: "Push notifications",
        enabled: true,
      },
      {
        id: "text",
        label: "Text notifications",
        enabled: true,
      },
      {
        id: "call",
        label: "Call before checkout",
        enabled: false,
      },
    ],
  },
  {
    title: "Marketing Updates",
    items: [
      {
        id: "special_offers",
        label: "Special offers",
        enabled: true,
      },
      {
        id: "news",
        label: "News and updates",
        enabled: false,
      },
    ],
  },
];

const Notifications = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Notifications" />

      <ScrollView contentContainerStyle={styles.content}>
        {notifications.map((section) => (
          <ThemedView
            key={section.title}
            style={[
              {
                marginBottom:
                  section === notifications[notifications.length - 1] ? 0 : 24,
              },
            ]}
          >
            <ThemedText type="titleSmallSemiBold" style={styles.title}>
              {section.title}
            </ThemedText>

            {section.items.map((item, index) => (
              <ThemedView
                style={[
                  styles.notificationItemRow,
                  {
                    borderBottomWidth:
                      index === section.items.length - 1 ? 0 : 0.5,
                    borderBottomColor: theme.gray200,
                  },
                ]}
                key={item.id}
              >
                <ThemedText type="callout">{item.label}</ThemedText>
                <Switch
                  value={item.enabled}
                  onValueChange={() => {}}
                  trackColor={{
                    false: theme.gray100,
                    true: theme.success500,
                  }}
                  thumbColor={theme.background}
                />
              </ThemedView>
            ))}
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingVertical: 24,
  },

  title: {
    paddingHorizontal: 16,
  },

  notificationItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
