import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="validate-code" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ headerShown: false }} />
      <Stack.Screen
        name="allow-notifications"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="share-location" options={{ headerShown: false }} />
      <Stack.Screen
        name="enter-address"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
