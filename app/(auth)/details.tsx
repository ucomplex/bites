import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import AuthHeader from "@/components/navigation/AuthHeader";
import { Colors } from "@/constants/Colors";

const Details = () => {
  const { phoneNumber } = useLocalSearchParams();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  console.log("Phone number:", phoneNumber);

  const handleContinue = () => {
    if (!firstName) {
      setFirstNameError("Имя обязательно.");
    }

    if (!lastName) {
      setLastNameError("Фамилия обязательна.");
    }

    if (firstName && lastName) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        // Save the user details to the local storage or database

        router.push("/allow-notifications");
      }, 2000);
    }
  };

  return (
    <ThemedView safe style={styles.container}>
      <AuthHeader title="Введите ваше имя" />

      <ThemedView style={styles.content}>
        <TextField
          placeholder="Имя"
          value={firstName}
          onChangeText={(text) => {
            setFirstName(text);
            setFirstNameError("");
          }}
          autoFocus
          error={firstNameError}
        />
        {firstNameError ? (
          <ThemedText
            type="footnote"
            lightColor={theme.error}
            darkColor={theme.error}
          >
            {firstNameError}
          </ThemedText>
        ) : null}
        <TextField
          placeholder="Фамилия"
          value={lastName}
          onChangeText={(text) => {
            setLastName(text);
            setLastNameError("");
          }}
          error={lastNameError}
        />
        {lastNameError ? (
          <ThemedText
            type="footnote"
            lightColor={theme.error}
            darkColor={theme.error}
          >
            {lastNameError}
          </ThemedText>
        ) : null}
        <Button loading={loading} title="Продолжить" onPress={handleContinue} />
      </ThemedView>
    </ThemedView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});
