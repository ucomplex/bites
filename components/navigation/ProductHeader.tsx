import { StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { useRouter } from "expo-router";
import RoundedButton from "../RoundedButton";

type ProductHeaderProps = {
  handleShare: () => void;
};

const ProductHeader = ({ handleShare }: ProductHeaderProps) => {
  const router = useRouter();

  return (
    <ThemedView style={[styles.productHeader]}>
      <RoundedButton onPress={() => router.back()} icon="close" />

      <RoundedButton
        onPress={() => {
          handleShare();
        }}
        icon="share"
      />
    </ThemedView>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  productHeader: {
    paddingTop: 16,
    paddingHorizontal: 16,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
  },
});
