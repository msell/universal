import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Widget } from "components";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Open up App.tsx to start working on your app!</Text>
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
  }
});
