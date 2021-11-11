//Componente para mostrar el clima, actual en detalle,de una ciudad seleccionada, tipo card.
//Utiliza la función para consultar la API del clima.
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }

import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import searchWeather from "../services/searchWeather";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function CityWeatherCard({ ciudadPais }) {
  //consultamos la API del Clima
  const resultado = searchWeather(ciudadPais);

  //obtenemos el nombre de la ciudad, los datos de temperatura y viento, de la respuesta de la API
  const { name, main, weather, wind } = resultado;

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
        <View>
          <Text style={styles.texto}>
            {weather[0].description.toUpperCase()}
          </Text>
          <Text style={styles.texto}>
            Sensación Térmica:{" "}
            <Text style={styles.temperatura}>
              {parseInt(main.feels_like)} &#x2103;
            </Text>
          </Text>
          <Text style={styles.texto}>
            Humedad:{" "}<Text style={styles.temperatura}>{main.humidity}%</Text>
          </Text>
          <Text style={styles.texto}>
            Viento:{" "}
            <Text style={styles.temperatura}>
              <Icon
                style={{ transform: [{ rotate: -wind.deg + "deg" }] }} //wind.deg////////////////
                name="navigation"
                type="material-community"
              />
              {" "}{parseInt(wind.speed * 3.6)} km/h
            </Text>
          </Text>
          <View style={styles.temperaturas}>
            <Text style={styles.texto}>
              Mín:{" "}
              <Text style={styles.temperatura}>
                {parseInt(main.temp_min)} &#x2103;
              </Text>
            </Text>

            <Text style={styles.texto}>
              Máx:{" "}
              <Text style={styles.temperatura}>
                {parseInt(main.temp_max)} &#x2103;
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
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
  temperaturas: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
