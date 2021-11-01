import React from "react";
import { ScrollView, View, Text } from "react-native";
import CityWeatherListItem from "../components/CityWeatherListItem";
import CityWeatherCard from "../components/CityWeatherCard";
import CityWeatherListItemLatLong from "../components/CityWeatherListItemLatLong";
import CityWeatherCardLatLong from "../components/CityWeatherCardLatLong";

export default function Cities() {
  //ejemplos para usar los componentes de Clima
  //pueden probar con otras ciudades, escribir mal alguna o dejar en blanco
  const ciudadPais1 = { ciudad: "Mendoza", pais: "AR" };
  const ciudadPais2 = { ciudad: "Mar del Plata", pais: "AR" };
  const latLongMendoza = { lat: -32.8908, lon: -68.8272 };

  return (
    <ScrollView>
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
        <CityWeatherCard ciudadPais={ciudadPais2} />
      </View>
      <View>
        <Text>Componente CityWeatherListItemLatLong</Text>
        <CityWeatherListItemLatLong latLong={latLongMendoza} />
      </View>
      <View>
        <Text>Componente CityWeatherCardLatLong</Text>
        <CityWeatherCardLatLong latLong={latLongMendoza} />
      </View>
    </ScrollView>
  );
}
