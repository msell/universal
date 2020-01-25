import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getEnvVars } from "config";

export const Widget: React.FC = () => (
  <View style={styles.container}>
    <Text>Widget</Text>
    <Text>{JSON.stringify(getEnvVars(), null, 2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
