import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";

import CityWeatherListItemLatLong from "../components/CityWeatherListItemLatLong";
import CityWeatherCardLatLong from "../components/CityWeatherCardLatLong";

import ModalWeatherCard from "../components/ModalWeatherCard";
import ModalSearchCity from "../components/ModalSearchCity";
import ModalMap from "../components/ModalMap";

import SearchCities from "../components/SearchCities";
import ViewCitiesMap from "../components/ViewCitiesMap";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favorites({ navigation }) {
  //definir el state de ciudades favoritas
  const [favoritesCities, setFavoritesCities] = useState([]);

  // obtener ciudades del storage
  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    try {
      const cities = await AsyncStorage.getItem("ciudades");
      setFavoritesCities(JSON.parse(cities));
    } catch (error) {
      console.log(error);
    }
  };

  //Eliminar ciudad
  
  const eliminarCity = async (id) => {
    try {
      const citiesStorage = await AsyncStorage.getItem("ciudades");
      
      let cities = [];
      if(citiesStorage !== null) cities = JSON.parse(citiesStorage);
      const citiesNew = cities.filter(city => city.id !== id);
      setFavoritesCities(citiesNew);
      await AsyncStorage.setItem("ciudades", JSON.stringify(citiesNew));
      
    } catch (error) {
      console.log(error);
    }
  };

  const [ciudad, setCiudad] = useState({});

  const [showModalWeatherCard, setShowModalWeatherCard] = useState(false);
  const [showModalSearchCity, setShowModalSearchCity] = useState(false);
  const [showModalMap, setShowModalMap] = useState(false);

  const verClimaCiudad = (ciudad) => {
    setShowModalWeatherCard(true);
    //console.log({ ciudad: ciudad.ciudad, pais: ciudad.pais });
    //setCiudad({ ciudad: ciudad.ciudad, pais: ciudad.pais });
    setCiudad({
      id: ciudad.id,
      name: ciudad.name,
      lat: ciudad.lat,
      lng: ciudad.lng,
      img: ciudad.img,
    });
  };

  const searchCity = () => {
    setShowModalSearchCity(true);
  };

  const verMapa = () => {
    setShowModalMap();
  };

  return (
    <View style={styles.container}>
      {favoritesCities && (
        <FlatList
          data={favoritesCities}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View style={styles.clima}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={() => verClimaCiudad(item)}
                >
                  <CityWeatherListItemLatLong ciudad={item} />
                </TouchableOpacity>
              </View>

              <View style={styles.eliminar}>
                <TouchableOpacity onPress={() => eliminarCity(item.id)}>
                  <Icon
                    type="material-community"
                    name="trash-can-outline"
                    color="white"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(city) => city.name}
        />
      )}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => searchCity()}>
          <Icon
            type="material-community"
            name="map-marker-plus"
            color="tomato"
            raised
            //containerStyle={styles.btnAgregarItem}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => verMapa()}>
          <Icon
            type="material-community"
            name="map"
            color="tomato"
            raised
            //containerStyle={styles.btnAgregarItem}
          />
        </TouchableOpacity>
      </View>

      <View>
        <ModalWeatherCard
          isVisible={showModalWeatherCard}
          setIsVisible={setShowModalWeatherCard}
        >
          <CityWeatherCardLatLong ciudad={ciudad} />
        </ModalWeatherCard>
      </View>

      <View>
        <ModalSearchCity
          isVisible={showModalSearchCity}
          setIsVisible={setShowModalSearchCity}
        >
          <SearchCities
            favoritesCities={favoritesCities}
            setFavoritesCities={setFavoritesCities}
          />
        </ModalSearchCity>
      </View>

      <View>
        <ModalMap isVisible={showModalMap} setIsVisible={setShowModalMap}>
          <ViewCitiesMap />
        </ModalMap>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse", //
    //backgroundColor: "#005CA7",
  },
  listItem: {
    flexDirection: "row",
    borderWidth: 1,
  },
  clima: {
    flex: 7,
  },
  eliminar: {
    flex: 1,
    justifyContent: "center",
    right: 0,
    backgroundColor: "tomato",
  },
  icon: {
    paddingVertical: 20,
  },
  menu: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    left: 0,
    zIndex: 2,
  },
});
