import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="enter-address"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="home-search"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="featured-products"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="category"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="store"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="store-search"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="store-info"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="product"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="carts"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checkout"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="schedule-delivery"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="payment-method"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add-card"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit-address"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="tips"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="processing-payment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="order-status"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="personal-information"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="notifications"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit-email"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit-name"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="edit-phone"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="change-password"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="favorites"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
