import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import {
  useColorScheme,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

const routes = [
  {
    id: 1,
    title: "About",
    route: "/legal",
  },
  {
    id: 2,
    title: "Settings",
    route: "/terms-of-service",
  },
  {
    id: 3,
    title: "Privacy Policy",
    route: "/privacy-policy",
  },
];

const About = () => {
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
      <TitleHeader title="About" />
      <ScrollView>
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
            <ThemedText type="callout">{route.title}</ThemedText>

            <Icon name="chevron_right" size={24} color={theme.gray500} />
          </Pressable>
        ))}
      </ScrollView>

      <Footer style={styles.footer}>
        <ThemedText
          type="footnote"
          lightColor={theme.gray500}
          darkColor={theme.gray500}
        >
          Version 1.0.0
        </ThemedText>
      </Footer>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
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

  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
