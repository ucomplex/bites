import React from "react";
import PaymentRow from "@/components/PaymentRow";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const payment_methods = [
  {
    id: 1,
    icon: "apple_pay",
    name: "Apple Pay",
  },
  {
    id: 2,
    icon: "plus",
    name: "Credit or debit card",
  },
  {
    id: 3,
    icon: "dollar",
    name: "Cash",
  },
];

const PaymentMethod = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const [selectedPayment, setSelectedPayment] = React.useState(
    payment_methods[0].id,
  );

  const handleSelectMethod = (id: number) => {
    setSelectedPayment(id);
    if (id === 2) {
      router.push("/add-card");
    }
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Payment Method" />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="heading">Payment Method</ThemedText>

        <ThemedView>
          {payment_methods.map((method, index) => (
            <PaymentRow
              key={method.id}
              icon={method.icon}
              name={method.name}
              selected={selectedPayment === method.id}
              showArrow={false}
              onPress={() => {
                handleSelectMethod(method.id);
              }}
              style={{
                borderBottomWidth:
                  index === payment_methods.length - 1
                    ? 0
                    : StyleSheet.hairlineWidth,
                borderBottomColor: theme.gray200,
              }}
            />
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
