import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ModalHeader from "@/components/navigation/ModalHeader";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import Footer from "@/components/Footer";
import DayRow from "@/components/DayRow";
import Radio from "@/components/Radio";

const days = [
  {
    name: "Today",
    date: "Aug 13",
  },
  {
    name: "Tomorrow",
    date: "Aug 14",
  },
  {
    name: "Monday",
    date: "Aug 15",
  },
  {
    name: "Tuesday",
    date: "Aug 16",
  },
  {
    name: "Wednesday",
    date: "Aug 17",
  },
  {
    name: "Thursday",
    date: "Aug 18",
  },
  {
    name: "Friday",
    date: "Aug 19",
  },
  {
    name: "Saturday",
    date: "Aug 20",
  },
  {
    name: "Sunday",
    date: "Aug 21",
  },
];

const hours = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
];

const ScheduleDelivery = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [selectedDay, setSelectedDay] = React.useState(days[0].name);
  const [selectedHour, setSelectedHour] = React.useState(hours[0]);

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
      <ModalHeader title="Schedule Delivery" />

      <ScrollView contentContainerStyle={styles.content}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.daysView}
        >
          {days.map((day, index) => (
            <DayRow
              key={index}
              day={day}
              selectedDay={selectedDay}
              onPress={() => {
                setSelectedDay(day.name);
              }}
            />
          ))}
        </ScrollView>

        <ThemedView style={styles.hours}>
          {hours.map((hour, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedHour(hour)}
              style={[
                styles.hourRow,
                {
                  borderBottomColor: theme.gray200,
                },
              ]}
            >
              <ThemedText type="footnoteMedium">{hour}</ThemedText>

              <Radio value={hour} selected={selectedHour} />
            </Pressable>
          ))}
        </ThemedView>
      </ScrollView>

      <Footer>
        <Button
          title="Schedule"
          onPress={() => {
            router.back();
          }}
        />
      </Footer>
    </ThemedView>
  );
};

export default ScheduleDelivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingBottom: 48,
  },

  daysView: {
    padding: 16,
    gap: 12,
  },

  hours: {
    paddingHorizontal: 16,
  },

  hourRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0.5,
  },
});
