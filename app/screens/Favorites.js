import React, { useState } from "react";
import { ScrollView, View, TouchableHighlight, FlatList } from "react-native";

import FavoriteItem from "../components/FavoriteItem";
import CityWeatherListItem from "../components/CityWeatherListItem";
import Modal from "../components/Modal";
import CityWeatherCard from "../components/CityWeatherCard";

export default function Favorites() {
  const [favoritesData, setFavoritesData] = useState([
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
  ]);

  const [showModal, setShowModal] = useState(false);

  const [ciudad, setCiudad] = useState({});

  const verClimaCiudad = (ciudad) => {
    setShowModal(true);
    //console.log({ ciudad: ciudad.ciudad, pais: ciudad.pais });
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
            <CityWeatherListItem ciudadPais={item} />
          </TouchableHighlight>
        )}
        keyExtractor={ city => city.id}
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
