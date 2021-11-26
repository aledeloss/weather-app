import React, { useState, useEffect } from "react";
import Navigation from "./app/navigation/Navigation";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ImageBackground,
} from "react-native";

import Fondo from "./assets/img/climas.jpg";

export default function App() {
  const [animated, setAnimated] = useState(true);
  const [show] = useState(new Animated.Value(0));
  const [show0] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(-900));
  const [font] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(show0, {
        toValue: 1,
        duration: 1000,
        //delay: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(show, {
        toValue: 1,
        duration: 4000,
        delay: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(position, {
        toValue: 900,
        duration: 6000,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(font, {
      toValue: 200,
      duration: 4000,
      delay: 7000,
      useNativeDriver: false,
    }).start(() => setAnimated(true));
  }, []);

  if (!animated)
    return (
      <View style={styles.container}>
          <Animated.Image
            style={[styles.image, {opacity: show0}, { right: position }]}
            source={Fondo}
          />
          <Animated.Text
            style={[
              styles.text,
              { opacity: show, transform: [{ scale: font }] },
            ]}
          >
            Weather-Up!
          </Animated.Text>
      </View>
    );

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#005CA7'
  },
  image: {
    width: 2500,
    height: 925,
  },
  text: {
    position: "absolute",
    top: 250,
    fontSize: 40,
    color: "#fff",
  },
});
