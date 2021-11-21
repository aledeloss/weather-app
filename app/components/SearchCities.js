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
const latitudDelta = 10;
const longitudeDelta = latitudDelta + width / height;

export default function SearchCities() {
  const [region, setRegion] = useState({
    latitude: -34.61315,
    longitude: -58.37723,
    latitudeDelta: latitudDelta,
    longitudeDelta: longitudeDelta,
  });
  const [ciudad, setCiudad] = useState({});
  const [miCiudad, setMiCiudad] = useState({});
  const [misCiudades, setMisCiudades] = useState([]);
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
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
    })();
  }, []);
  const guardarCiudad = async () => {
    try {
      setMiCiudad(ciudad);
      setMisCiudades(() => misCiudades.length
      ? [...misCiudades, miCiudad] : [miCiudad]
      );
      const prueba = [
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
        }
      ]
      alert(JSON.stringify(misCiudades))
      await AsyncStorage.setItem("misCiudades", JSON.stringify(misCiudades));
      await AsyncStorage.setItem("prueba", JSON.stringify(prueba));
      // ciudades.push(ciudad);
      // const json_value = JSON.stringify(ciudades);
      // await AsyncStorage.setItem("ciudades", json_value);
      // console.log("Guardar:" + json_value);
    
    } catch (e) {
      console.log(e);
    }
    // try {
    //   ciudades.push(ciudad);
    //   const json_value = JSON.stringify(ciudades);
    //   await AsyncStorage.setItem("ciudades", json_value);
    //   console.log("Guardar:" + json_value);
    
    // } catch (e) {
    //   console.log(e);
    // }
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
          });
          setCiudad({
           ciudad: details.address_components[0].long_name,
           pais: 'AR',
           location:details.geometry.location,
           URL:details.url          
          });
        }}
        query={{
          key: "AIzaSyDZrkPzHejNRtTUoYtY6lxts8a-URSGAiY",
          language: "es-419",
          components: "country:ar",
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
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: latitudDelta,
            longitudeDelta: longitudeDelta,
          }}
          draggable
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
    width: width,
    height: height,
    zIndex: -1,
  },
  button: {
    position: "absolute",
    top:50,
    right:10,
    zIndex: 2,
  },
});
