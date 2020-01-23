// @generated: @expo/next-adapter@2.0.1
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Widget } from 'components';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Widget />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fe3"
  },
  content: {
    width: 200
  },
  text: {
    fontSize: 16,
  },
});
