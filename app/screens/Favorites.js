import React from "react";
import { ScrollView, View, TouchableHighlight } from "react-native";

import FavoriteItem from "../components/FavoriteItem";
import CityWeatherListItem from "../components/CityWeatherListItem";

export default function Favorites() {
  const favoritesData = [
    {
      id: 0,
      ciudad: "Mar del Plata",
      pais: "AR",
    },
    {
      id: 1,
      ciudad: "Bariloche",
      pais: "AR",
    },
    {
      id: 2,
      ciudad: "Miramar",
      pais: "AR",
    },
  ];

  return (
    <ScrollView>
      {favoritesData.map((city) => {
        console.log(city.id, city.ciudad);
        return (
          <>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => alert("Pressed!")}
            >
              {city && <CityWeatherListItem ciudadPais={city} />}
            </TouchableHighlight>
          </>
        );
      })}
    </ScrollView>
  );
}
