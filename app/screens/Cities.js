import React from "react";
import { View, Text } from "react-native";

import SearchCities from "../components/SearchCities";

export default function Cities() {
  
  return (
    <View>
      <Text>Buscar Ciudad</Text>
       <SearchCities/>
    </View>
  );
}