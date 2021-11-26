import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { isvisible, text } = props;
  return (
    <Overlay
      isVisible={isvisible}
      overlayStyle={styles.overlay}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="tomato" />
        {text && <Text>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "#005CA7",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
});
