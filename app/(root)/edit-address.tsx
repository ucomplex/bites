import * as React from "react";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import SearchAddressBar from "@/components/SearchAddressBar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ModalHeader from "@/components/navigation/ModalHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import TextField from "@/components/TextField";
import MapView, { Marker } from "react-native-maps";

const EditAddress = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [address, setAddress] = React.useState("987 Cedarwood Avenue");
  const [zipCode, setZipCode] = React.useState("78912");
  const [state, setState] = React.useState("Brookhaven, TX");
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const handleSave = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 2000);
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
      <ModalHeader title="Редактировать адрес" />
      <ScrollView contentContainerStyle={styles.content}>
        <SearchAddressBar autoFocus={false} />

        <ThemedView style={styles.mapView}>
          <MapView
            initialRegion={{
              latitude: 32.7767,
              longitude: -96.797,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            style={styles.map}
          >
            <Marker
              coordinate={{
                latitude: 32.7767,
                longitude: -96.797,
              }}
            />
          </MapView>
        </ThemedView>

        <ThemedView style={styles.textFields}>
          <TextField
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />
          <TextField placeholder="Apt, floor, suite, etc. (optional)" />
          <TextField placeholder="Business name (optional)" />

          <ThemedView style={styles.textFieldRows}>
            <TextField
              placeholder="Zip Code"
              value={zipCode}
              onChangeText={setZipCode}
              style={styles.textField}
            />
            <TextField
              placeholder="City"
              value={state}
              onChangeText={setState}
              style={styles.textField}
            />
          </ThemedView>
          <ThemedText
            type="footnote"
            lightColor={theme.gray500}
            darkColor={theme.gray500}
          >
            Delete address
          </ThemedText>
        </ThemedView>
      </ScrollView>

      <Footer>
        <Button loading={loading} title="Save Address" onPress={handleSave} />
      </Footer>
    </ThemedView>
  );
};

export default EditAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
    gap: 16,
  },

  mapView: {
    height: 146,
    borderRadius: 8,
    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: "100%",
  },

  textFields: {
    gap: 8,
  },

  textFieldRows: {
    flexDirection: "row",
    gap: 8,
  },

  textField: {
    flex: 1,
  },
});
