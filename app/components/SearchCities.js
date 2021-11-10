import React, {useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Icon} from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

//GooglePlacesAutocomplete: este componente es el buscador de las ciudades, donde trae todos los datos, latitud,
//longitud, imagenes, nombre, pais, etc.

const {width, height}=Dimensions.get('window');
const latitudDelta=10;
const longitudeDelta=latitudDelta + (width/height);

export default function SearchCities(){
  const [region, setReagion]=useState({
    latitude:-34.61315,
    longitude:-58.37723,
    latitudeDelta:latitudDelta,
    longitudeDelta:longitudeDelta,
  });
  const [ciudad, setCiudad]=useState('');
  let ciudades = [];
  const guardarCiudad = async ()=> {
    try {     
        ciudades.push(ciudad);
        const json_value = JSON.stringify(ciudades);
        await AsyncStorage.setItem('ciudades', json_value);
        console.log('Guardar:'+json_value)
        getData();
      }
    catch (e) {
  
      console.log(e);
    }
  };
  

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('ciudades')
      return console.log(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch(e) {
      console.log(e);
    }
  }
  


    return (
      <View style={styles.container}>
      
        <GooglePlacesAutocomplete 
        placeholder='Search'
        fetchDetails={true}
        GooglePlacesDetailsQuery={{
          rankby:"distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setReagion({
            latitude: details.geometry.location.lat,
            longitude:details.geometry.location.lng,
            latitudeDelta:latitudDelta,
            longitudeDelta:longitudeDelta,
          })
          setCiudad(details.address_components[0].long_name)
          
        }}
        query={{
          key: 'AIzaSyDZrkPzHejNRtTUoYtY6lxts8a-URSGAiY',
          language: 'es-419',
          components: 'country:ar',
      
        }}
        styles={{
          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1},
          listView: { backgroundColor: "white" }
        }}
      onFail={error => console.error(error)}
      />
      <MapView style={styles.map}
        initialRegion ={{
        latitude:-34.61315,
        longitude:-58.37723,
        latitudeDelta:latitudDelta,
        longitudeDelta:longitudeDelta,
      }}>
      <Marker
       coordinate={{
         latitude:region.latitude,
         longitude:region.longitude,
         latitudeDelta:latitudDelta,
         longitudeDelta:longitudeDelta,
        }}
     
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
    flex:0,

  },
  map: {

    width:width,
    height:height,  
    zIndex:-1,
  },
  button:{
    position:"absolute",
    right:20,
    zIndex:2,
  }
});
    
	



