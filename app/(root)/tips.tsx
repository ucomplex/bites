import React from "react";
import AgreementTitle from "@/components/AgreementTitle";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import RadioRow from "@/components/RadioRow";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TitleHeader from "@/components/navigation/TitleHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";
import Modal from "react-native-modal";
import TipAmountMenu from "@/components/TipAmountMenu";
import { useLocalSearchParams, useRouter } from "expo-router";

const tips = [
  "$1.00",
  "$2.00",
  "$3.00",
  "$4.00",
  "$5.00",
  "$6.00",
  "Other - $2.00 Edit",
];

const Tips = () => {
  const { store } = useLocalSearchParams();

  const parsedStore = typeof store === "string" ? JSON.parse(store) : store;

  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const router = useRouter();

  const [selectedTip, setSelectedTip] = React.useState(tips[0]);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [tipAmount, setTipAmount] = React.useState("$2.00");

  const handlePressItem = (item: string) => {
    if (item === "Other - $2.00 Edit") {
      setMenuVisible(true);
    } else {
      setSelectedTip(item);
    }
  };

  const handleSaveTipAmount = () => {
    setLoading(true);

    setTimeout(() => {
      setSelectedTip(tipAmount);
      setMenuVisible(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <TitleHeader title="Say thanks with a tip" />
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedView style={styles.titleView}>
          <ThemedText type="heading">Tip for the time you save</ThemedText>
          <ThemedText
            type="bodySmall"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            Show your appreciation by adding a tip for your shopper. A tip
            recognizes their effort in selecting and delivering your groceries
            with care.
          </ThemedText>
        </ThemedView>

        {tips.map((tip, index) => (
          <RadioRow
            key={index}
            value={tip}
            selected={selectedTip}
            onPress={() => handlePressItem(tip)}
            titleColor={theme.gray500}
          />
        ))}
      </ScrollView>

      <Modal
        isVisible={menuVisible}
        onBackdropPress={() => setMenuVisible(false)}
        onSwipeComplete={() => setMenuVisible(false)}
        swipeDirection="down"
        backdropOpacity={0.5}
        style={styles.modal}
      >
        <TipAmountMenu loading={loading} onPress={handleSaveTipAmount} />
      </Modal>

      <Footer>
        <Button
          title="Place order"
          onPress={() => {
            router.push({
              pathname: "/processing-payment",
              params: {
                store: JSON.stringify(parsedStore),
              },
            });
          }}
        />

        <AgreementTitle />
      </Footer>
    </ThemedView>
  );
};

export default Tips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
  },

  titleView: {
    gap: 4,
  },

  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
});
