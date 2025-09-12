import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/Button";
import GhostButton from "@/components/GhostButton";
import TextField from "@/components/TextField";
import SocialButton from "@/components/SocialButton";
import { useRouter } from "expo-router";
import AuthHeader from "@/components/navigation/AuthHeader";
import { Colors } from "@/constants/Colors";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (phoneNumber.length < 10) {
        setError("Пожалуйста, введите действительный номер телефона.");
      } else {
        router.push({
          pathname: "/validate-code",
          params: {
            phoneNumber,
          },
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ThemedView safe style={styles.container}>
        <AuthHeader title="Enter your phone number" />

        <ThemedView style={styles.content}>
          <ThemedView style={styles.fields}>
            <ThemedView style={styles.textField}>
              <TextField
                icon="call_phone"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                autoFocus
                error={error}
              />

              {error ? (
                <ThemedText
                  type="footnote"
                  lightColor={theme.error}
                  darkColor={theme.error}
                >
                  {error}
                </ThemedText>
              ) : null}
            </ThemedView>

            <Button loading={loading} title="Continue" onPress={handleLogin} />
          </ThemedView>

          <ThemedView style={styles.separator}>
            <ThemedView
              style={[
                styles.divider,
                {
                  backgroundColor: theme.border,
                },
              ]}
            />
            <ThemedText
              type="footnote"
              lightColor={theme.gray500}
              darkColor={theme.gray500}
            >
              or
            </ThemedText>
            <ThemedView
              style={[
                styles.divider,
                {
                  backgroundColor: theme.border,
                },
              ]}
            />
          </ThemedView>

          <ThemedView style={styles.socialBtns}>
            <SocialButton icon="apple" title="Apple" color={theme.icon} />
            <SocialButton icon="google" title="Google" />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.footer}>
          <GhostButton
            title="Skip for now"
            onPress={() => {
              router.replace("/(root)/(tabs)/home");
            }}
            underline
          />
        </ThemedView>
      </ThemedView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  fields: {
    gap: 12,
  },

  textField: {
    gap: 8,
  },

  separator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 16,
  },

  divider: {
    flex: 1,
    height: 0.5,
  },

  socialBtns: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },

  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
