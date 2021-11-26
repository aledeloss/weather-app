//Componente para mostrar el clima actual en la lista de ciudades.
//Utiliza la función para consultar la API del clima.
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }

import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import searchWeatherLatLong from "../services/searchWeatherLatLong";
import Loading from "./Loading";

export default function CityWeatherListItemLatLong({ciudad}) {
  const resultado = searchWeatherLatLong(ciudad);
  const { name, main } = resultado[0];
  const isLoading = resultado[1];

  const img = ciudad.img;
  
  const key = "AIzaSyDZrkPzHejNRtTUoYtY6lxts8a-URSGAiY";

  if (!isLoading) {
    return (
      <View style={styles.clima}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${img}&key=${key}`,
          }}
        >
          <Text style={[styles.texto, {width:'100%', paddingTop: 10}]}>{name}</Text>
          <Text style={[styles.texto, styles.actual]}>
            {parseInt(main.temp)}
            <Text style={styles.temperatura}>&#x2103;</Text>
            <Image
              style={{ width: 100, height: 58 }}
              source={{
                uri: `http://openweathermap.org/img/w/${resultado[0].weather[0].icon}.png`,
              }}
            />
          </Text>
        </ImageBackground>
      </View>
    );
  } else {
    return <Loading isVisible={true}/>;
  }
}

const styles = StyleSheet.create({
  clima: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around'
  },
  texto: {
    color: "#ffe",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  actual: {
    fontSize: 30,
    fontWeight: "bold",
  },
  temperatura: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
