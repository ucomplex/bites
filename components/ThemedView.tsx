import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { SafeAreaView } from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  safe?: boolean;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  safe,
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  if (safe) {
    return (
      <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
    );
  }

  return <View style={[style]} {...otherProps} />;
}
