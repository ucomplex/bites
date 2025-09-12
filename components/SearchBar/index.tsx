import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
} from "react-native";
import { ThemedView } from "../ThemedView";
import Icon from "../Icon";
import { Colors } from "@/constants/Colors";

type SearchBarProps = {
  loading?: boolean;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  focused?: boolean;
  error?: boolean;
};

const SearchBar = ({
  loading,
  placeholder,
  value,
  onChangeText,
  autoFocus,
  focused,
  error,
  ...props
}: SearchBarProps) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView
      style={[
        styles.searchField,
        {
          backgroundColor: theme.gray50,
          borderColor: focused ? theme.text : theme.gray200,
        },
      ]}
    >
      <ThemedView
        style={[
          styles.searchBar,
          {
            borderColor: error ? theme.error : theme.gray200,
            backgroundColor: theme.background,
          },
        ]}
      >
        <Icon name="search" size={24} color={theme.gray500} />

        <TextInput
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={error ? theme.error : theme.gray500}
          style={[
            styles.textInput,
            {
              color: theme.text,
            },
          ]}
          {...props}
        />

        {
          <Pressable
            onPress={() => onChangeText?.("")}
            style={styles.removeButton}
          >
            {loading ? (
              <ActivityIndicator size="small" color={theme.icon} />
            ) : (
              value && (
                <Icon name="remove_close" size={24} color={theme.gray300} />
              )
            )}
          </Pressable>
        }
      </ThemedView>
    </ThemedView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchField: {
    flexGrow: 1,
    borderRadius: 56,
    borderWidth: 1,
    padding: 6,
  },

  searchBar: {
    height: 52,
    minHeight: 52,
    borderRadius: 56,
    borderWidth: 0.5,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingLeft: 16,
  },

  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Inter_18pt-Regular",
  },

  removeButton: {
    padding: 12,
    borderRadius: 56,
  },
});
