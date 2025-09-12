import * as React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ModalHeader from "@/components/navigation/ModalHeader";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import {
  useColorScheme,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "@/components/Icon";
import Tabs from "@/components/Tabs";

const delivery_times = [
  {
    day: "Monday",
    time: "7:00 AM - 5:00 PM",
  },
  {
    day: "Tuesday",
    time: "7:00 AM - 5:00 PM",
  },
  {
    day: "Wednesday",
    time: "7:00 AM - 5:00 PM",
  },
  {
    day: "Thursday",
    time: "7:00 AM - 5:00 PM",
  },
  {
    day: "Friday",
    time: "7:00 AM - 5:00 PM",
  },
  {
    day: "Saturday",
    time: "7:00 AM - 5:00 PM",
  },
  {
    day: "Sunday",
    time: "7:00 AM - 5:00 PM",
  },
];

const StoreInfo = () => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const [activeTab, setActiveTab] = React.useState("information");

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const renderTabContent = () => {
    switch (activeTab) {
      case "information":
        return (
          <ThemedView style={styles.storeInformationView}>
            <ThemedView
              style={[
                styles.storeInformation,
                {
                  backgroundColor: theme.background,
                  borderBottomColor: theme.gray200,
                },
              ]}
            >
              <ThemedText type="callout">About</ThemedText>
              <ThemedView style={styles.descriptionRow}>
                <Icon name="info_circle" size={24} color={theme.icon} />

                <ThemedView style={styles.descriptionColumn}>
                  <ThemedText
                    type="calloutSmall"
                    lightColor={theme.gray500}
                    darkColor={theme.gray500}
                  >
                    {parsedStore?.description}
                  </ThemedText>

                  <ThemedView
                    style={[
                      styles.divider,
                      {
                        backgroundColor: theme.gray200,
                      },
                    ]}
                  />

                  <ThemedText
                    type="calloutSmall"
                    lightColor={theme.gray500}
                    darkColor={theme.gray500}
                  >
                    Delivery
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedView
              style={[
                styles.storeInformation,
                {
                  backgroundColor: theme.background,
                  borderTopWidth: 0.5,
                  borderTopColor: theme.gray200,
                  borderBottomColor: theme.gray200,
                },
              ]}
            >
              <ThemedView style={styles.deliveryTime}>
                <ThemedText
                  type="caption"
                  lightColor={theme.gray500}
                  darkColor={theme.gray500}
                >
                  NEXT DELIVERY TIME
                </ThemedText>

                <ThemedText type="titleSemiBold">Within 2 hours</ThemedText>
              </ThemedView>

              <Pressable
                onPress={() => setActiveTab("delivery-times")}
                style={styles.deliveryButton}
              >
                <ThemedText
                  type="footnoteMedium"
                  lightColor={theme.success600}
                  darkColor={theme.success600}
                >
                  All delivery times
                </ThemedText>
                <Icon name="chevron_right" size={16} color={theme.success600} />
              </Pressable>
            </ThemedView>
          </ThemedView>
        );
      case "delivery-times":
        return (
          <ThemedView>
            <ThemedView
              style={[
                styles.deliveryTimes,
                {
                  backgroundColor: theme.background,
                },
              ]}
            >
              <ThemedText type="callout">Hours</ThemedText>

              {delivery_times.map((time, index) => (
                <ThemedView style={styles.timeView} key={index}>
                  <ThemedText
                    type="calloutSmall"
                    lightColor={theme.gray500}
                    darkColor={theme.gray500}
                  >
                    {time.day}
                  </ThemedText>

                  <ThemedText
                    type="calloutSmall"
                    lightColor={theme.gray500}
                    darkColor={theme.gray500}
                  >
                    {time.time}
                  </ThemedText>
                </ThemedView>
              ))}
            </ThemedView>
          </ThemedView>
        );
      default:
        return null;
    }
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
      <ModalHeader title={parsedStore?.name} />

      <ScrollView>
        <ThemedView
          style={[
            styles.storeBrand,
            {
              backgroundColor: theme.background,
            },
          ]}
        >
          <Image source={parsedStore?.image} style={styles.storeImage} />
          <ThemedText
            type="footnote"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            Dairy ・ Organic ・ Groceries
          </ThemedText>
        </ThemedView>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <ThemedView>{renderTabContent()}</ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  storeBrand: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  storeImage: {
    width: 64,
    height: 64,
  },

  storeInformationView: {
    gap: 8,
  },

  storeInformation: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 12,
    borderBottomWidth: 0.5,
  },

  descriptionRow: {
    flexDirection: "row",
    gap: 12,
  },

  descriptionColumn: {
    flex: 1,
    gap: 12,
  },

  divider: {
    height: 0.5,
    flex: 1,
  },

  deliveryTimes: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 12,
  },

  deliveryTime: {
    gap: 4,
  },

  deliveryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  timeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
