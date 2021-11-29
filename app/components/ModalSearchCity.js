import React from "react";
import { StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export default function Modal(props) {
  const { isVisible, setIsVisible, children } = props;

  const closeModal = () => setIsVisible(false);

  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
      onBackdropPress={closeModal}
    >
      {children}
    </Overlay>
  );
}
const styles = StyleSheet.create({
  /*overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: "auto",
    width: "85%",
    backgroundColor: "#005CA7",
    borderWidth: 0,
  },*/
  overlay: {
    height: "85%",
    width: "95%",
    backgroundColor: "#005CA7",
    borderWidth: 0,
  },
});
