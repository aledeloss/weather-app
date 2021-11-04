import React, {useState} from "react";
import { ScrollView, View, TouchableHighlight, Text } from "react-native";

import FavoriteItem from "../components/FavoriteItem";
import CityWeatherListItem from "../components/CityWeatherListItem";
import Modal from "../components/Modal";
import CityWeatherCard from "../components/CityWeatherCard";

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

  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollView>
      <View>
      {favoritesData.map((city) => {
        console.log(city.id, city.ciudad);
        return (
          <>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              //onPress={() => alert("Pressed!")}
              onPress={()=>setShowModal(true)}
            >
              {city && <CityWeatherListItem ciudadPais={city} />}
            </TouchableHighlight>
          </>
        );
      })}
      </View>

      <Modal isVisible={showModal} setIsVisible={setShowModal}>
        <Text>Modal</Text>
        <CityWeatherCard ciudadPais={{ciudad: 'Buenos Aires', pais: 'AR'}} />

      </Modal>
      
    </ScrollView>
    
  );
}
