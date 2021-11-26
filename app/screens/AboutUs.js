import React from "react";
import { View, Text, StyleSheet, ImageBackground, Linking } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgFondo}
        resizeMode="cover"
        source={require("../../assets/img/cielo2.jpg")}
      >
        <Text style={styles.titulo}>Wheather-Up!</Text>
        <Text style={styles.texto}>
          Desarrolladores:{"\n"}- Alejandra De Los Santos (Buenos Aires){"\n"}-
          Veronica Monzón (Buenos Aires){"\n"}- Norberto Llopiz (Mendoza){"\n"}
          {"\n"}
          En forma individual hicimos los cursos, investigamos, probamos. Con
          reuniones virtuales y chats, nos repartimos las tareas, hicimos
          puestas en común y pruebas, logrando un producto consensuado y
          satisfactorio.{"\n"}
          {"\n"}
          Herramientas de UX:{"\n"}-{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL(
                "https://docs.google.com/presentation/d/12awDvgUmqQR8mSJ0cuyklpOVSdR72Mf6gspk39Lg_XM/edit?usp=sharing"
              )
            }
          >
            Persona Canva
          </Text>
          {"\n"}-{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL(
                "https://docs.google.com/presentation/d/1RldYREaqtWxan24oHldEZdYPFCMXyCOjfNStWi6e5YI/edit?usp=sharing"
              )
            }
          >
            Prototipo
          </Text>
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgFondo: {
    height: "100%",
  },
  titulo: {
    color: "#fff",
    fontSize: 25,
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  texto: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 30,
  },
});
