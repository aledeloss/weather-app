import React from "react";
import { View, Text } from "react-native";
import CityWeatherListItem from "../components/CityWeatherListItem";
import CityWeatherCard from "../components/CityWeatherCard";

export default function Cities() {
  
  //ejemplos para usar los componentes de Clima
  //pueden probar con otras ciudades, escribir mal alguna o dejar en blanco
  const ciudadPais1 = { ciudad: "Mar del Plata", pais: "AR" };
  const ciudadPais2 = { ciudad: "Miramar", pais: "AR" };

  return (
    <>
      <View>
        <Text>Cities</Text>
      </View>
      <View>
        <Text>Componente CityWeatherListItem</Text>
        <CityWeatherListItem ciudadPais={ciudadPais1} />
      </View>
      <View>
        <Text>Componente CityWeatherListItem</Text>
        <CityWeatherListItem ciudadPais={ciudadPais2} />
      </View>
      <View>
        <Text>Componente CityWeatherCard</Text>
        <CityWeatherCard ciudadPais={ciudadPais1} />
      </View>
    </>
  );
}

