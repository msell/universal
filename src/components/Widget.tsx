import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Widget: React.FC = () => (
  <View style={styles.container}>
    <Text>Widget</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
