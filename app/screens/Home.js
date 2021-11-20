import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgFondo}
        resizeMode="cover"
        source={require("../../assets/img/cielo1.jpg")}
      >
        <Text style={styles.titulo}>Wheather-Up!</Text>
        <Text style={styles.texto}>
          BIENVENID@{"\n"}
          {"\n"}
          Arma tu propia lista de ciudades. Podrás ver todos los datos del clima
          actualizados en tiempo real, para que puedas organizarte en cada
          momento.{"\n"}
          {"\n"}
          Busca tus ciudades preferidas y agrégalas en tu lista de Favoritos.
          {"\n"}
          {"\n"}
          En un 'touch' tendrás el clima completo al instante!
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C94CC",
    color: "#fff",
    
  },
  imgFondo: {
      height: "100%",
  },
  titulo: {
    color: "#fff",
    fontSize: 25,
    marginTop: 70,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  texto: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 30,
    textAlign: "center",
  },
});
