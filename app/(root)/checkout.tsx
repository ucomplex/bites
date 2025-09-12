import * as React from "react";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  useColorScheme,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import InstructionsMenu from "@/components/InstructionsMenu";
import CheckoutRow from "@/components/CheckoutRow";
import DeliveryTimeRow from "@/components/DeliveryTimeRow";
import TextField from "@/components/TextField";
import PaymentRow from "@/components/PaymentRow";
import Footer from "@/components/Footer";
import AgreementTitle from "@/components/AgreementTitle";

type DeliveryTimeOptionProps = {
  icon: string;
  label: string;
  duration: string;
  price: string;
  navigation: boolean;
};

const delivery_times: DeliveryTimeOptionProps[] = [
  {
    icon: "circle_clock",
    label: "Стандартная",
    duration: "20-40 мин",
    price: "$5.99",
    navigation: false,
  },
  {
    icon: "bolt",
    label: "Экспресс",
    duration: "10-20 мин",
    price: "$9.99",
    navigation: false,
  },
  {
    icon: "calendar",
    label: "Позже",
    duration: "Выберите время",
    price: "$12.99",
    navigation: true,
  },
];

const Checkout = () => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [instructions, setInstructions] = React.useState("");
  const [deliveryTime, setDeliveryTime] =
    React.useState<DeliveryTimeOptionProps>({
      icon: "flash",
      label: "Standard",
      duration: "15-25 min",
      price: "$5.99",
      navigation: false,
    });
  const [loading, setLoading] = React.useState(false);

  const handleSaveInstructions = async (newInstructions: string) => {
    setLoading(true);
    setInstructions(newInstructions);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setMenuVisible(false);
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.gray100,
        },
      ]}
    >
      <TitleHeader title="Checkout" />

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView
          style={[
            styles.checkoutView,
            {
              backgroundColor: theme.background,
              borderBottomColor: theme.gray200,
            },
          ]}
        >
          <ThemedView>
            <CheckoutRow
              type="route"
              icon="location"
              title="987 Cedarwood Avenue"
              subtitle="Brookhaven, TX 78912"
              onPress={() => {
                router.navigate("/edit-address");
              }}
            />
            <CheckoutRow
              type="modal"
              icon="car"
              title="Delivery instructions"
              subtitle={
                instructions ? instructions : "Add delivery instructions"
              }
              onPress={() => {
                setMenuVisible(true);
              }}
            />
          </ThemedView>

          <ThemedView style={[styles.deliveryTimesView]}>
            <ThemedText type="callout">Delivery time</ThemedText>

            {delivery_times.map((time) => (
              <DeliveryTimeRow
                key={time.label}
                time={time}
                deliveryTime={deliveryTime}
                onPress={() => {
                  if (time.navigation) {
                    router.navigate("/schedule-delivery");
                  } else {
                    setDeliveryTime(time);
                  }
                }}
              />
            ))}
          </ThemedView>

          <TextField
            label="Mobile number"
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
          />

          <PaymentRow
            icon="apple_pay"
            name="Apple Pay"
            onPress={() => {
              router.push("/payment-method");
            }}
          />
        </ThemedView>

        <ThemedView
          style={[
            styles.summaryView,
            {
              backgroundColor: theme.background,
              borderTopColor: theme.gray200,
              borderBottomColor: theme.gray200,
            },
          ]}
        >
          <ThemedText type="callout">Order summary</ThemedText>

          <ThemedView style={styles.summary}>
            <ThemedView style={styles.summaryRows}>
              <ThemedView style={styles.summaryRow}>
                <ThemedText
                  type="bodySmall"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  Item subtotal
                </ThemedText>
                <ThemedText type="callout">$15.99</ThemedText>
              </ThemedView>

              <ThemedView style={styles.summaryRow}>
                <ThemedText
                  type="bodySmall"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  Delivery fee
                </ThemedText>
                <ThemedText type="callout">$4.99</ThemedText>
              </ThemedView>

              <ThemedView style={styles.summaryRow}>
                <ThemedText
                  type="bodySmall"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  Tax
                </ThemedText>
                <ThemedText type="callout">$1.99</ThemedText>
              </ThemedView>
            </ThemedView>

            <ThemedView
              style={[
                styles.summaryDivider,
                {
                  backgroundColor: theme.gray200,
                },
              ]}
            />

            <ThemedView style={styles.summaryRow}>
              <ThemedText type="callout">Total</ThemedText>
              <ThemedText type="heading">$22.97</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ScrollView>

      <Modal
        isVisible={menuVisible}
        onBackdropPress={() => setMenuVisible(false)}
        onSwipeComplete={() => setMenuVisible(false)}
        swipeDirection="down"
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <InstructionsMenu
          loading={loading}
          initialValue={instructions}
          onSave={handleSaveInstructions}
          onClose={() => setMenuVisible(false)}
        />
      </Modal>

      <Footer>
        <Button
          title="Continue"
          onPress={() => {
            router.navigate({
              pathname: "/tips",
              params: {
                store: JSON.stringify(parsedStore),
              },
            });
          }}
        />
        <AgreementTitle />
      </Footer>
    </ThemedView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    gap: 4,
    paddingBottom: 48,
  },

  checkoutView: {
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    gap: 16,
  },

  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },

  deliveryTimesView: {
    gap: 8,
  },

  summaryView: {
    padding: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    gap: 16,
  },

  summary: {
    gap: 12,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryRows: {
    gap: 8,
  },

  summaryDivider: {
    height: 0.5,
  },
});
