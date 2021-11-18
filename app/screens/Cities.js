import React from "react";
import { ScrollView, View, Text } from "react-native";
import CityWeatherListItem from "../components/CityWeatherListItem";
import CityWeatherCard from "../components/CityWeatherCard";
import CityWeatherListItemLatLong from "../components/CityWeatherListItemLatLong";
import CityWeatherCardLatLong from "../components/CityWeatherCardLatLong";
import SearchCities from "../components/SearchCities";

export default function Cities() {
  
  return (
    <View>
      <Text>Buscar Ciudad</Text>
       <SearchCities/>
    </View>
  );
}

