import { useColorScheme, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

type RadioProps = {
  value: string;
  selected: string;
};

const Radio = ({ value, selected }: RadioProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.radio,
        {
          borderColor: selected === value ? theme.success600 : theme.gray200,
          backgroundColor:
            selected === value ? theme.success600 : theme.background,
        },
      ]}
    >
      {selected === value && (
        <ThemedView
          style={[
            styles.radioIndicator,
            {
              backgroundColor:
                selected === value ? theme.background : theme.success600,
            },
          ]}
        />
      )}
    </ThemedView>
  );
};

export default Radio;

const styles = StyleSheet.create({
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  radioIndicator: {
    width: 6,
    height: 6,
    borderRadius: 6,
  },
});
