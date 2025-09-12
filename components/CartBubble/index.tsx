import { Pressable, useColorScheme, StyleSheet } from "react-native";
import Icon from "../Icon";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

type CartBubbleProps = {
  totalQuantity: number;
  parsedStore: any;
};

const CartBubble = ({ totalQuantity, parsedStore }: CartBubbleProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/cart",
      params: {
        store: JSON.stringify(parsedStore),
      },
    });
  };

  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 }),
    ),
    4, // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.cartButton,
        {
          backgroundColor: theme.success600,
        },
      ]}
    >
      <Animated.View style={animatedStyle}>
        <Icon name="shopping_basket_bold" size={24} color={theme.white} />
      </Animated.View>
      <ThemedText
        type="callout"
        lightColor={theme.white}
        darkColor={theme.white}
      >
        {totalQuantity}
      </ThemedText>
    </Pressable>
  );
};

export default CartBubble;

const styles = StyleSheet.create({
  cartButton: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 96,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    position: "absolute",
    bottom: 32,
    right: 16,
    elevation: 20,
    shadowColor: "rgba(22, 163, 74, 0.5)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
});
