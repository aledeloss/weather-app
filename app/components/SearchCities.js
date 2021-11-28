import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "react-native-elements";
import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

//GooglePlacesAutocomplete: este componente es el buscador de las ciudades, donde trae todos los datos, latitud,
//longitud, imagenes, nombre, pais, etc.

const { width, height } = Dimensions.get("window");
const latitudDelta = 25;
const longitudeDelta = latitudDelta + width / height;

export default function SearchCities() {
  const [region, setRegion] = useState({
    latitude: -38.416097,
    longitude: -63.616672,
    latitudeDelta: latitudDelta,
    longitudeDelta: longitudeDelta,
    name:''
  });
  const [ciudad, setCiudad] = useState([]);
  let ciudades = [];
  useEffect(() => {
    (async () => {
      const resultPermissions =
        await Location.requestForegroundPermissionsAsync();
      console.log(resultPermissions);
      const statusPermissions = resultPermissions.status;

      if (statusPermissions !== "granted") {
        alert("Tienes que aceptar los permisos de localizacion");
      } else {
        const loc = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: latitudDelta,
          longitudeDelta: longitudeDelta,
          name:'Estoy aquí',
        });
      }
    })();
  }, []);
  const guardarCiudad = async () => {
    try {
      const value = await AsyncStorage.getItem('ciudades');
      console.log('lo que esta guardado:'+ value);
      if (value) {
        ciudades = JSON.parse(value);
        if (
          ciudades.find(
            item =>
              item.name.trim().toUpperCase() === ciudad.name.trim().toUpperCase(),
          )
        ) {
          return alert('Valor duplicado.');
        } else {
          ciudades.push(ciudad);
          const json_value = JSON.stringify(ciudades);
          await AsyncStorage.setItem('ciudades', json_value);
          const value1 = await AsyncStorage.getItem('ciudades');
          console.log('lo que esta guardado 1:'+ value1);
        }
      } else {
        ciudades.push(ciudad);
        const json_value = JSON.stringify(ciudades);
        await AsyncStorage.setItem('ciudades', json_value);
        const value2 = await AsyncStorage.getItem('ciudades');
        console.log('lo que esta guardado 2:'+ value2);
      }

      // navigation.navigate('Home');
    
    } catch (e) {
      console.log(e);
    }
  };

 
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesDetailsQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: latitudDelta,
            longitudeDelta: longitudeDelta,
            name: details.address_components[0].short_name,
          });
          setCiudad({
           id: details.place_id,
           name: details.address_components[0].long_name,
           lat: details.geometry.location.lat,
           lng: details.geometry.location.lng,
           img: details.photos[0].photo_reference,
          });
        }}
        query={{
          key: "AIzaSyDZrkPzHejNRtTUoYtY6lxts8a-URSGAiY",
          language: "es-419",
          components: "country:ar",
          types:'(cities)',
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            top:10,
            width: "85%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
        onFail={(error) => console.error(error)}
      />
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
        <Marker
          // anchor={{x: 0.5, y: 1}}
          // centerOffset={{x: 0.5, y: 1}}
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: latitudDelta,
            longitudeDelta: longitudeDelta,
          }}
          title={region.name}
        
        />
        
      </MapView>
      <Icon
        type="material-community"
        name="plus"
        color="tomato"
        reverse
        containerStyle={styles.button}
        onPress={guardarCiudad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width-40,
    height: height-150,
    zIndex: -1,
  },
  button: {
    position: "absolute",
    bottom: 10,
    right:10,
    zIndex: 2,
  },
});