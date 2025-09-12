import Icon from "@/components/Icon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useColorScheme, StyleSheet, Pressable } from "react-native";

const routes = [
  {
    id: 1,
    title: "capricorn.engineering@outlook.com",
    subtitle: "Электронная почта",
    route: "/edit-email",
  },
  {
    id: 2,
    title: "Jose A. Vazquez",
    subtitle: "Имя",
    route: "/edit-name",
  },
  {
    id: 3,
    title: "+ (352) 933-3903",
    subtitle: "Номер телефона",
    route: "/edit-phone",
  },
  {
    id: 4,
    title: "********",
    subtitle: "Пароль",
    route: "/change-password",
  },
];

const PersonalInformation = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Personal Information" />
      <ThemedView style={styles.content}>
        <ThemedView>
          {routes.map((route, index) => (
            <Pressable
              key={route.id}
              onPress={() => {
                router.push(route.route as any);
              }}
              style={[
                styles.routeView,
                {
                  borderBottomColor: theme.gray200,
                },
              ]}
            >
              <ThemedView style={styles.routeNameRow}>
                <ThemedText type="callout">{route.title}</ThemedText>
                <ThemedText
                  type="footnote"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  {route.subtitle}
                </ThemedText>
              </ThemedView>

              <Icon name="chevron_right" size={24} color={theme.gray500} />
            </Pressable>
          ))}
        </ThemedView>
        <Pressable style={styles.button}>
          <ThemedText
            type="button"
            lightColor={theme.error}
            darkColor={theme.error}
          >
            Delete account
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  routeView: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  routeNameRow: {
    gap: 4,
  },

  button: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
