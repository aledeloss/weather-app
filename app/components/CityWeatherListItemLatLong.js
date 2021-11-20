//Componente para mostrar el clima actual en la lista de ciudades.
//Utiliza la función para consultar la API del clima.
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }

import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import searchWeatherLatLong from "../services/searchWeatherLatLong";

export default function CityWeatherListItemLatLong({ ciudad }) {
  //console.log(ciudad);
  const resultado = searchWeatherLatLong(ciudad);
  const { name, main } = resultado;

  const img = ciudad.img;
  
  const key = "AIzaSyDZrkPzHejNRtTUoYtY6lxts8a-URSGAiY";

  if (name) {
    return (
      <View style={styles.clima}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${img}&key=${key}`,
          }}
        >
          <Text style={[styles.texto, {width:'100%', paddingTop: 20}]}>{name}</Text>
          <Text style={[styles.texto, styles.actual]}>
            {parseInt(main.temp)}
            <Text style={styles.temperatura}>&#x2103;</Text>
            <Image
              style={{ width: 100, height: 58 }}
              source={{
                uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`,
              }}
            />
          </Text>
        </ImageBackground>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  clima: {
    flexDirection: "row",
    marginBottom: 0,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  actual: {
    fontSize: 70,
    marginRight: 0,
    fontWeight: "bold",
  },
  temperatura: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
