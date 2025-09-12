import { useColorScheme, StyleSheet } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type OrderStepsProps = {
  steps: {
    icon: string;
    title: string;
  }[];
};

const OrderSteps = ({ steps }: OrderStepsProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.orderStepsView}>
      <ThemedView
        style={[
          styles.orderSteps,
          {
            backgroundColor: theme.success100,
            borderColor: theme.success200,
          },
        ]}
      >
        {steps.map((step, index) => (
          <ThemedView
            key={index}
            style={[
              styles.orderStep,
              {
                backgroundColor: index === 0 ? theme.success600 : "transparent",
              },
            ]}
          >
            <Icon
              name={step.icon}
              size={18}
              color={index === 0 ? theme.white : theme.success700}
            />
          </ThemedView>
        ))}
      </ThemedView>

      <ThemedView style={styles.orderStepsTitles}>
        {steps.map((step, index) => (
          <ThemedText
            key={index}
            type="caption"
            lightColor={theme.text}
            darkColor={theme.text}
            style={styles.orderStepTitle}
          >
            {step.title}
          </ThemedText>
        ))}
      </ThemedView>
    </ThemedView>
  );
};

export default OrderSteps;

const styles = StyleSheet.create({
  orderStepsView: {
    gap: 8,
  },

  orderSteps: {
    padding: 4,
    borderWidth: 0.5,
    borderRadius: 96,
    flexDirection: "row",
    alignItems: "center",
  },

  orderStep: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 96,
    alignItems: "center",
    justifyContent: "center",
  },

  orderStepsTitles: {
    flexDirection: "row",
  },

  orderStepTitle: {
    flex: 1,
    textAlign: "center",
  },
});
