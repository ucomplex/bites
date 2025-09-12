import React from "react";
import {
  Animated,
  Image,
  ImageStyle,
  StyleSheet,
  ImageResizeMode,
  StyleProp,
} from "react-native";
import { icons } from "@/constants";

type IconProps = {
  name: keyof typeof icons | string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  animated?: boolean;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
  [key: string]: any;
};

export default function Icon({
  name,
  size,
  width,
  height,
  color,
  animated = false,
  resizeMode = "contain",
  style,
  ...props
}: IconProps) {
  const iconStyles: StyleProp<ImageStyle>[] = [
    styles.icon,
    size ? { width: size, height: size } : {},
    width ? { width } : {},
    height ? { height } : {},
    color !== "none" ? { tintColor: color } : {},
    style || {},
  ].filter(Boolean) as StyleProp<ImageStyle>[];

  const iconSource =
    name in icons ? icons[name as keyof typeof icons] : undefined;

  if (!iconSource) {
    console.warn(`Icon '${name}' does not exist in icons`);
    return null;
  }

  if (animated) {
    return (
      <Animated.Image
        source={iconSource}
        resizeMode={resizeMode}
        style={iconStyles}
        {...props}
      />
    );
  }

  return (
    <Image
      source={iconSource}
      style={iconStyles}
      resizeMode={resizeMode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18,
  },
});
