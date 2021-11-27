import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { Icon } from "react-native-elements";

import CityWeatherListItemLatLong from "../components/CityWeatherListItemLatLong";
import CityWeatherCardLatLong from "../components/CityWeatherCardLatLong";

import Modal from "../components/Modal";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favorites({ navigation }) {
  //definir el state de ciudades favoritas
  const [favoritesCities, setFavoritesCities] = useState([
    {
      id: 1,
      name: "Mar del Plata",
      lat: -38.0054771,
      lng: -57.5426106,
      img: "Aap_uEBlx6-JNI2y-kfb3xnpLLjtoOgyNu_Jp3gc_VctbiiaPjsLBja7s-fDA1X0dM_28ryx7hQKIhnOlVsEwuxYA3rQLgspWzYgiiyrkjhd8glZZ025-kDLaNSySqijIPFaYqSv2xVL_OZsITCfhbsXGb5Yx2goWzSwWD3xHQNFdGxgnBL_",
    },
    {
      id: 2,
      name: "Miramar",
      lat: -38.2703168,
      lng: -57.8394498,
      img: "Aap_uEDiziWUBrjXgSq9L4PLe7L3s6halLvf5wQDsHXewH1Q6h0-TfgSaVc38ppd8uFhQbI7TBUxCXfxCaeX80ExzYcTDX7sFKj94lBiKCrkBbgoPkdt-hzjnyxn4gqlowX50HCCqPg86zOD_vyScJMDo1xtDSqJpk8BeZdcpNnxY6FaVMeA",
    },
    {
      id: 3,
      name: "Villa Gesell",
      lat: -37.2598939,
      lng: -56.97141939999999,
      img: "Aap_uECN7LP10ltU_LPS1mvMxfWqyVSIzmCU4hA4b56aIoYxZl6husMMyvA4ntgEBgnCWLjDRCnrrU1UaB7yOOFU5X3sLTT97wVtC3dc95DNgpGCJ5h5PVgtOplF8iRn-sAlsnwXcpoUvDRlCb4ERKPg28v-MvHIuVc0bnh6VcVn2UHgzJqx",
    },
    {
      id: 4,
      name: "Pinamar",
      lat: -37.1145662,
      lng: -56.86070549999999,
      img: "Aap_uEAptVZVaoAaSDgM-FAJBM6404Mii-mlsO6pVclI5D5rd1Dsa0rdsD1C7n8rtCRSVk7vLKFp1VBVOLEOHGh_k5j5_k_JI9tyG6RH8C38ibXoF1iueoYXxyY-uxNlEhWszS6vqjImeeEqvi4r7uv8UYHMCZ76E1IsTa5bu1mDvrQmMFBM",
    },
    {
      id: 5,
      name: "Santa Teresita",
      lat: -36.7232497,
      lng: -56.6750185,
      img: "Aap_uEBwcYShofumi6psZ41h4rt73L03Tzz1gQux2-aqSohFiJm5rxvEXf-Me_sFnJYzegPT_sQVWngnuyrXKiRbnGH04b7veChVN-P1CQC7w6MP5tcFBBYEZaNpyHtPzle0ra3ode5AbWAtmDE0j9Y3PuJ9peixDewkiH3r9Atn2KqlCuPX",
    },
  ]);

  //Eliminar ciudad
  const deleteCity = (id) => {
    setFavoritesCities((actualCities) => {
      return actualCities.filter((city) => city.id !== id);
    });
  };

  const [showModal, setShowModal] = useState(false);

  const [ciudad, setCiudad] = useState({});

  const verClimaCiudad = (ciudad) => {
    setShowModal(true);
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

  const eliminarCity = (id) => {
    console.log("Eliminar? ", id);
    deleteCity(id);
  };

  /*const agregarItem = () => {
    alert("Agregar?");
  };*/

  const verMapa = () => {
    alert("VerMapa?");
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("cities")}>
          <Icon
            type="material-community"
            name="map-marker-plus"
            color="tomato"
            reverse
            //containerStyle={styles.btnAgregarItem}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => verMapa()}>
          <Icon
            type="material-community"
            name="map"
            color="tomato"
            reverse
            //containerStyle={styles.btnAgregarItem}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Modal isVisible={showModal} setIsVisible={setShowModal}>
          <CityWeatherCardLatLong ciudad={ciudad} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
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
