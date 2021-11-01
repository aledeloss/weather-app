//Componente para mostrar el clima actual en la lista de ciudades.
//Utiliza la función para consultar la API del clima.
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import searchWeatherLatLong from "../services/searchWeatherLatLong";

export default function CityWeatherListItem({ latLong }) {
  const resultado = searchWeatherLatLong(latLong);

  const { name, main } = resultado;
  

  if (name) {
    return (
      <View style={styles.clima}>
        <Text style={styles.texto}>{name}</Text>
        <Text style={[styles.texto, styles.actual]}>
          {parseInt(main.temp)}
          <Text style={styles.temperatura}>&#x2103;</Text>
          <Image
            style={{ width: 66, height: 58 }}
            source={{
              uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`,
            }}
          />
        </Text>
      </View>
    );
  } else {
      return null;
  }
}

const styles = StyleSheet.create({
  clima: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  texto: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
    marginRight: 20,
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
