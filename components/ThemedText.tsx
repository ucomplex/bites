import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "defaultSemiBold"
    | "title"
    | "titleSemiBold"
    | "titleSmallSemiBold"
    | "subtitle"
    | "heading"
    | "headingSemiBold"
    | "headingBold"
    | "titleSmallBold"
    | "subheading"
    | "body"
    | "bodySmall"
    | "callout"
    | "calloutSemiBold"
    | "calloutSmall"
    | "calloutSmallMedium"
    | "calloutSmallBold"
    | "footnote"
    | "footnoteMedium"
    | "caption"
    | "captionMedium"
    | "captionSemiBold"
    | "link"
    | "button";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "title" ? styles.title : undefined,
        type === "titleSemiBold" ? styles.titleSemiBold : undefined,
        type === "titleSmallSemiBold" ? styles.titleSmallSemiBold : undefined,
        type === "titleSmallBold" ? styles.titleSmallBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "heading" ? styles.heading : undefined,
        type === "headingSemiBold" ? styles.headingSemiBold : undefined,
        type === "headingBold" ? styles.headingBold : undefined,
        type === "subheading" ? styles.subheading : undefined,
        type === "body" ? styles.body : undefined,
        type === "bodySmall" ? styles.bodySmall : undefined,
        type === "callout" ? styles.callout : undefined,
        type === "calloutSemiBold" ? styles.calloutSemiBold : undefined,
        type === "calloutSmall" ? styles.calloutSmall : undefined,
        type === "calloutSmallMedium" ? styles.calloutSmallMedium : undefined,
        type === "calloutSmallBold" ? styles.calloutSmallBold : undefined,
        type === "footnote" ? styles.footnote : undefined,
        type === "footnoteMedium" ? styles.footnoteMedium : undefined,
        type === "caption" ? styles.caption : undefined,
        type === "captionMedium" ? styles.captionMedium : undefined,
        type === "captionSemiBold" ? styles.captionSemiBold : undefined,
        type === "link" ? styles.link : undefined,
        type === "button" ? styles.button : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },

  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_18pt-SemiBold",
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Plus-Jakarta-Sans-Bold",
  },

  titleSemiBold: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Plus-Jakarta-Sans-SemiBold",
  },

  titleSmallSemiBold: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "Plus-Jakarta-Sans-SemiBold",
  },

  titleSmallBold: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "Plus-Jakarta-Sans-Bold",
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Regular",
  },

  heading: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_18pt-Medium",
  },

  headingSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_18pt-SemiBold",
  },

  headingBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_18pt-Bold",
  },

  subheading: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter_18pt-Regular",
  },

  body: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Regular",
  },

  bodySmall: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Regular",
  },

  callout: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Medium",
  },

  calloutSemiBold: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_18pt-SemiBold",
  },

  calloutSmall: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Regular",
  },

  calloutSmallMedium: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Medium",
  },

  calloutSmallBold: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Bold",
  },

  footnote: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter_18pt-Regular",
  },

  footnoteMedium: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter_18pt-Medium",
  },

  caption: {
    fontSize: 11,
    lineHeight: 16,
    fontFamily: "Inter_18pt-Regular",
  },

  captionMedium: {
    fontSize: 11,
    lineHeight: 16,
    fontFamily: "Inter_18pt-Medium",
  },

  captionSemiBold: {
    fontSize: 11,
    lineHeight: 16,
    fontFamily: "Inter_18pt-SemiBold",
  },

  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },

  button: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_18pt-Medium",
  },
});
