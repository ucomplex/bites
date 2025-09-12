import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

type DayRowProps = {
  selectedDay: string;
  day: {
    name: string;
    date: string;
  };
  onPress: () => void;
};

const DayRow = ({ selectedDay, day, onPress }: DayRowProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.dayView,
        {
          borderColor: selectedDay === day.name ? theme.text : theme.gray200,
        },
      ]}
    >
      <ThemedText type="callout">{day.name}</ThemedText>
      <ThemedText
        type="calloutSmall"
        lightColor={theme.gray500}
        darkColor={theme.gray500}
      >
        {day.date}
      </ThemedText>
    </Pressable>
  );
};

export default DayRow;

const styles = StyleSheet.create({
  dayView: {
    width: 156,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
