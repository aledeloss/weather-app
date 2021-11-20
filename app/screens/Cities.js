import React from "react";
import { ScrollView, View, Text } from "react-native";
import SearchCities from "../components/SearchCities";

export default function Cities() {
  
  return (
    <View>
      <Text>Buscar Ciudad</Text>
       <SearchCities/>
    </View>
  );
}