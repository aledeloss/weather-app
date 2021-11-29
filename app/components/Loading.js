import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { isvisible, text } = props;
  return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="tomato" />
        {text && <Text>{text}</Text>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    marginTop: 10,
  },
});
