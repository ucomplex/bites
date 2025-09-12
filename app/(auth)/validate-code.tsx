import React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "@/components/Button";
import OTPTextInput from "react-native-otp-textinput";
import LottieView from "lottie-react-native";
import AuthHeader from "@/components/navigation/AuthHeader";
import { Colors } from "@/constants/Colors";

const ValidateCode = () => {
  const { phoneNumber } = useLocalSearchParams();

  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  React.useEffect(() => {
    if (code.length === 6) {
      handleConfirm();
    }
  }, [code]);

  const handleConfirm = () => {
    setLoading(true);

    setTimeout(() => {
      if (code.length < 6) {
        setError("Please enter a valid code.");
      } else {
        setSuccess(true);

        setTimeout(() => {
          router.push({
            pathname: "/details",
            params: {
              phoneNumber,
            },
          });
        }, 2000);
      }

      setLoading(false);
    }, 2000);
  };

  return (
    <ThemedView safe style={styles.container}>
      <AuthHeader
        title="Verification code"
        description="Enter the 6-digit code we sent over SMS to (352) 023-3040."
      />

      <ThemedView style={styles.content}>
        <ThemedView style={styles.otpFields}>
          <OTPTextInput
            inputCount={6}
            handleTextChange={(text) => {
              setCode(text);
              setError("");
            }}
            tintColor={error ? theme.error : theme.success600}
            offTintColor={theme.gray200}
            autoFocus
            textInputStyle={{
              borderRadius: 8,
              height: 56,
              borderWidth: 1,
            }}
          />

          <Button loading={loading} title="Confirm" onPress={handleConfirm} />

          <Pressable>
            <ThemedText
              type="button"
              lightColor={theme.success600}
              darkColor={theme.success600}
            >
              Request a new code
            </ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>

      {success && (
        <LottieView
          style={styles.lottie}
          source={require("@/assets/animations/confetti.json")}
          autoPlay
          loop={false}
        />
      )}
    </ThemedView>
  );
};

export default ValidateCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
  },

  otpFields: {
    gap: 12,
  },

  lottie: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
