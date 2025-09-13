import React from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CartHeader from "@/components/navigation/CartHeader";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useColorScheme, StyleSheet, ScrollView, Switch } from "react-native";
import OrderSteps from "@/components/OrderSteps";

const steps = [
  {
    icon: "checkmark",
    title: "Получен",
  },
  {
    icon: "shopping_basket",
    title: "Покупка",
  },
  {
    icon: "car",
    title: "В пути",
  },
  {
    icon: "home",
    title: "Доставлен",
  },
];

const OrderStatus = () => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.gray100,
        },
      ]}
    >
      <CartHeader
        parsedStore={parsedStore}
        onPress={() => {
          router.navigate("/orders");
        }}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView
          style={[
            styles.orderConfirmationView,
            {
              backgroundColor: theme.background,
              borderColor: theme.gray200,
            },
          ]}
        >
          <ThemedView>
            <ThemedView
              style={[
                {
                  backgroundColor: theme.success900,
                },
              ]}
            >
              <ThemedView
                style={[
                  styles.orderTimingTitle,
                  {
                    borderBottomColor: theme.success800,
                  },
                ]}
              >
                <ThemedText
                  type="subheading"
                  lightColor={theme.white}
                  darkColor={theme.white}
                >
                  ОЖИДАЕМОЕ ВРЕМЯ ДОСТАВКИ
                </ThemedText>
                <ThemedText
                  type="title"
                  lightColor={theme.white}
                  darkColor={theme.white}
                >
                  10:28AM - 10:33AM
                </ThemedText>
              </ThemedView>

              <ThemedView style={styles.orderTimingOrder}>
                <ThemedText
                  type="subheading"
                  lightColor={theme.white}
                  darkColor={theme.white}
                >
                  ЗАКАЗ #: 30439 • 2 ТОВАРА • $20.39
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <ThemedView
            style={[
              styles.orderDetailsView,
              {
                borderBottomColor: theme.gray200,
              },
            ]}
          >
            <ThemedView style={styles.orderDetailsTitleView}>
              <ThemedText
                type="titleSmallBold"
                style={styles.orderDetailsTitle}
              >
                ВАШ ЗАКАЗ
                ПОЛУЧЕН!
              </ThemedText>
              <ThemedText
                type="footnote"
                lightColor={theme.gray500}
                darkColor={theme.gray500}
              >
                Мы отправили письмо с подтверждением на{"\n"}
                capricorn.engineering@outlook.com.
              </ThemedText>
            </ThemedView>

            <OrderSteps steps={steps} />

            <ThemedView style={styles.orderDetailsAgreementView}>
              <ThemedView style={[styles.buttonRow]}>
                <Button
                  title="Карта"
                  onPress={() => {}}
                  style={styles.button}
                />
                <Button
                  type="secondary"
                  title="Нужна помощь?"
                  onPress={() => {}}
                  style={styles.button}
                />
              </ThemedView>
              <ThemedText
                type="footnote"
                lightColor={theme.gray500}
                darkColor={theme.gray500}
                style={styles.orderDetailsAgreementText}
              >
                Нажав "Карта", вы будете перенаправлены на сторонний
                сервис, где вы можете отслеживать статус вашего заказа
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.orderDetailsLockScreenView}>
            <ThemedText type="callout">
              Отслеживать мой заказ
            </ThemedText>

            <Switch
              trackColor={{ false: theme.gray200, true: theme.success500 }}
              thumbColor={theme.white}
              ios_backgroundColor={theme.gray200}
              onValueChange={() => {}}
              value={true}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView
          style={[
            styles.trackingInformationView,
            {
              backgroundColor: theme.background,
              borderColor: theme.gray200,
            },
          ]}
        >
          <ThemedView
            style={[
              styles.trackingInformationTitleView,
              {
                backgroundColor: theme.purple100,
                borderBottomColor: theme.purple200,
              },
            ]}
          >
            <ThemedText
              type="subheading"
              lightColor={theme.purple600}
              darkColor={theme.purple600}
            >
              ИНФОРМАЦИЯ ОТСЛЕЖИВАНИЯ
            </ThemedText>
          </ThemedView>

          <ThemedView
            style={[
              styles.trackingInformationDetailsView,
              {
                borderBottomWidth: 0.5,
                borderBottomColor: theme.gray200,
              },
            ]}
          >
            <ThemedView style={styles.trackingInformationDetailsRow}>
              <Icon name="store" size={24} color={theme.icon} />
              <ThemedView style={[styles.trackingInformationDetailsTitleView]}>
                <ThemedText type="callout">Доставка из</ThemedText>
                <ThemedText
                  type="calloutSmall"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  Imperio Fresh
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.trackingInformationDetailsView}>
            <ThemedView style={styles.trackingInformationDetailsRow}>
              <Icon name="location" size={24} color={theme.icon} />
              <ThemedView style={[styles.trackingInformationDetailsTitleView]}>
                <ThemedText type="callout">Доставка по адресу</ThemedText>
                <ThemedText
                  type="calloutSmall"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  987 Cedarwood Avenue
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingTop: 16,
    paddingBottom: 48,
    paddingHorizontal: 16,
    gap: 16,
  },

  orderConfirmationView: {
    borderWidth: 0.5,
    borderRadius: 16,
    overflow: "hidden",
  },

  orderTimingTitle: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderBottomWidth: 0.5,
  },

  orderTimingOrder: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  orderDetailsView: {
    padding: 16,
    borderBottomWidth: 0.5,
    gap: 24,
  },

  orderDetailsTitleView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  orderDetailsTitle: {
    textAlign: "center",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  button: {
    flex: 1,
  },

  orderDetailsAgreementView: {
    gap: 12,
  },

  orderDetailsAgreementText: {
    textAlign: "center",
  },

  orderDetailsLockScreenView: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  trackingInformationView: {
    borderRadius: 16,
    borderWidth: 0.5,
    overflow: "hidden",
  },

  trackingInformationTitleView: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },

  trackingInformationDetailsView: {
    padding: 16,
  },

  trackingInformationDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  trackingInformationDetailsTitleView: {
    gap: 4,
  },
});
