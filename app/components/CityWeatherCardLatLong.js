//Componente para mostrar el clima, actual en detalle,de una ciudad seleccionada, tipo card.
//Utiliza la función para consultar la API del clima.
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import searchWeatherLatLong from "../services/searchWeatherLatLong";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Loading from "./Loading";

export default function CityWeatherCardLatLong({ ciudad }) {
  //consultamos la API del Clima
  const resultado = searchWeatherLatLong(ciudad);

  //obtenemos el nombre de la ciudad, los datos de temperatura y viento, de la respuesta de la API
  const { name, main, weather, wind } = resultado[0];
  const isLoading = resultado[1];

  if (!isLoading) {
    return (
      <View style={styles.clima}>
        <Text style={[styles.texto, styles.name]}>{name}</Text>
        <Text style={[styles.texto, styles.actual]}>
          {parseInt(main.temp)}
          <Text style={styles.temperatura}>&#x2103;</Text>
          <Image
            style={{ width: 66, height: 58 }}
            source={{
              uri: `http://openweathermap.org/img/w/${resultado[0].weather[0].icon}.png`,
            }}
          />
        </Text>
        <View>
          <Text style={[styles.texto, {marginBottom: 10}]}>
            {weather[0].description.toUpperCase()}
          </Text>
          <Text style={styles.texto}>
            Sensación Térmica:{" "}
            <Text style={styles.temperatura}>
              {parseInt(main.feels_like)} &#x2103;
            </Text>
          </Text>
          <Text style={styles.texto}>
            Humedad: <Text style={styles.temperatura}>{main.humidity}%</Text>
          </Text>
          <Text style={styles.texto}>
            Viento:{" "}
            <Text style={styles.temperatura}>
              <Icon
                style={{ transform: [{ rotate: -wind.deg + "deg" }] }}
                name="navigation"
                type="material-community"
                color="tomato"
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
    return <Loading isVisible={true}/>;
  }
}

const styles = StyleSheet.create({
  clima: {
    marginBottom: 0,
    backgroundColor: '#005CA7',
    paddingVertical: 20,    
  },
  texto: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actual: {
    fontSize: 70,
    marginRight: 0,
    fontWeight: "bold",
    fontStyle: 'italic'
  },
  temperatura: {
    fontSize: 20,
    fontWeight: "bold",
  },
  temperaturas: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
});
