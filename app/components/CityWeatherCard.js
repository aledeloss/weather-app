//Componente para mostrar el clima, actual en detalle,de una ciudad seleccionada, tipo card.
//Utiliza la función para consultar la API del clima.
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }

import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import searchWeather from "../services/searchWeather";

export default function CityWeatherCard({ ciudadPais }) {

  //consultamos la API del Clima
  const resultado = searchWeather(ciudadPais); 

  //obtenemos el nombre de la ciudad, los datos de temperatura y viento, de la respuesta de la API
  const { name, main, wind } = resultado;

  if (!name) return null;

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
      <View>
        <Text style={styles.texto}>
          Sensación Térmica{" "}
          <Text style={styles.temperatura}>
            {parseInt(main.feels_like)} &#x2103;
          </Text>
        </Text>
        <Text style={styles.texto}>
          Humedad <Text style={styles.temperatura}>{main.humidity}%</Text>
        </Text>
        <Text style={styles.texto}>
          Viento{" "}
          <Text style={styles.temperatura}>
            {parseInt(wind.speed * 3.6)}km/h
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginRight: 20,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: "bold",
  },
  temperatura: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
