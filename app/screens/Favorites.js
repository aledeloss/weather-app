import React, { useState } from "react";
import { ScrollView, View, TouchableHighlight, FlatList } from "react-native";

import FavoriteItem from "../components/FavoriteItem";

import CityWeatherListItemLatLong from "../components/CityWeatherListItemLatLong"
import CityWeatherCardLatLong from "../components/CityWeatherCardLatLong";
import CityWeatherListItem from "../components/CityWeatherListItem";
import CityWeatherCard from "../components/CityWeatherCard"

import Modal from "../components/Modal";

export default function Favorites() {
  const [favoritesData, setFavoritesData] = useState([
    {
      ciudad: "Mar del Plata",
      pais: "AR"
    },
    {
      ciudad: "Buenos Aires",
      pais: "AR"
    },
    {
      ciudad: "Miramar",
      pais: "AR"
    },
  ]);

  /*const [favoritesData, setFavoritesData] = useState([
    {
      name: "Mar del Plata",
      lat: -38.0054771,
      lng: -57.5426106,
    },
    {
      name: "San Clemente del Tuyu",
      lat: -36.3688312,
      lng: -56.7185135,
    },
    {
      name: "Miramar",
      lat: -38.2703168,
      lng: -57.8394498,
    },
  ]);*/

  const [showModal, setShowModal] = useState(false);

  const [ciudad, setCiudad] = useState({});

  const verClimaCiudad = (ciudad) => {
    setShowModal(true);
    //console.log({ ciudad: ciudad.ciudad, pais: ciudad.pais });
    /*setCiudad({ lat: ciudad.lat, lng: ciudad.lng });*/
    setCiudad({ ciudad: ciudad.ciudad, pais: ciudad.pais });
  };

  return (
    <>
      <FlatList
        data={favoritesData}
        renderItem={({item}) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => verClimaCiudad(item)}
          >
            <CityWeatherListItem
            ciudadPais={item} />
          </TouchableHighlight>
        )}
        keyExtractor={ city => city.ciudad}
      />

      <View>
        <Modal isVisible={showModal} setIsVisible={setShowModal}>
          <CityWeatherCard ciudadPais={ciudad} />
        </Modal>
        {/*        {favoritesData.map((city) => {
          console.log(city.id, city.ciudad);
          return (
            <>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => verClimaCiudad(city)}
              >
                {city && <CityWeatherListItem ciudadPais={city} />}
              </TouchableHighlight>
              
              <Modal isVisible={showModal} setIsVisible={setShowModal}>
                <CityWeatherCard
                  ciudadPais={ciudad}
                />
              </Modal>
            </>
          );
        })}
*/}
      </View>
    </>
  );
}
