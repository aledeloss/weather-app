import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//GooglePlacesAutocomplete: este componente es el buscador de las ciudades, donde trae todos los datos, latitud,
//longitud, imagenes, nombre, pais, etc.

const { width, height } = Dimensions.get("window");
const latitudDelta = 25;
const longitudeDelta = latitudDelta + width / height;

export default function ViewCitiesMap() {
  const [region, setRegion] = useState({
    latitude: -38.416097,
    longitude: -63.616672,
    latitudeDelta: latitudDelta,
    longitudeDelta: longitudeDelta,
    name: "",
  });
  
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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: -34.61315,
          longitude: -58.37723,
          latitudeDelta: latitudDelta,
          longitudeDelta: longitudeDelta,
        }}
      >
        {favoritesCities && favoritesCities.map(city => (

          <Marker
          coordinate={{
            latitude: city.lat,
            longitude: city.lng,
            latitudeDelta: latitudDelta,
            longitudeDelta: longitudeDelta,
          }}
          title={region.name}
          key={city.id}
        />
        ))}
        

      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width - 40,
    height: height - 150,
    zIndex: -1,
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 2,
  },
});
