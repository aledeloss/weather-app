import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PlacesAutocomplete(props) {
  const [userSelection, setUserSelection] = useState("");

  const [favoritesCities, setFavoritesCities] = useState([]);

  const saveStorage = async (city) => {
    try {
      await AsyncStorage.setItem("city", JSON.stringify(city));
    } catch (error) {
      console.log(error);
    }
    console.log("guardando storage");
    //console.log(userSelection);
  };

  const newCity = (city) => {
    if (!city.name) {
      Alert.alert("Error", "Debes seleccionar una ciudad", [{ text: "Ok" }]);
      return;
    } else {
      // agregar al state
      const favoritesCitiesNew = [...favoritesCities, city];
      setFavoritesCities(favoritesCitiesNew);

      console.log(favoritesCities);

      navigation.navigate("favorites");

      //saveStorage(city);
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
          //console.log(data, details);

          /*console.log(details.formatted_address);
            console.log(details.name)
            console.log(details.geometry.location);
            console.log(details.photos[0].photo_reference);
            */
          setUserSelection({
            id: details.formatted_address,
            name: details.name,
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            img: details.photos[0].photo_reference,
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
            top: 10,
            left: 5,
            width: "85%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
        onFail={(error) => console.error(error)}
      />
      <View style={styles.btnAdd}>
        <TouchableOpacity onPress={() => newCity(userSelection)}>
          <Icon
            type="material-community"
            name="plus"
            color="tomato"
            reverse
            //containerStyle={styles.btnAgregarItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  btnAdd: {
    position: "absolute",
    right: 0,
  },
});
