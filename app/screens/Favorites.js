import React, { useState } from "react";
import { ScrollView, View, TouchableHighlight, FlatList } from "react-native";

import FavoriteItem from "../components/FavoriteItem";

import CityWeatherListItemLatLong from "../components/CityWeatherListItemLatLong"
import CityWeatherCardLatLong from "../components/CityWeatherCardLatLong";
import CityWeatherListItem from "../components/CityWeatherListItem";
import CityWeatherCard from "../components/CityWeatherCard"

import Modal from "../components/Modal";

export default function Favorites() {
  /*const [favoritesData, setFavoritesData] = useState([
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
  ]);*/

  const [favoritesData, setFavoritesData] = useState([
    {
      name: "Mar del Plata",
      lat: -38.0054771,
      lng: -57.5426106,
      img: "Aap_uEBlx6-JNI2y-kfb3xnpLLjtoOgyNu_Jp3gc_VctbiiaPjsLBja7s-fDA1X0dM_28ryx7hQKIhnOlVsEwuxYA3rQLgspWzYgiiyrkjhd8glZZ025-kDLaNSySqijIPFaYqSv2xVL_OZsITCfhbsXGb5Yx2goWzSwWD3xHQNFdGxgnBL_"
      
    },
    {
      name: "San Clemente del Tuyu",
      lat: -36.3688312,
      lng: -56.7185135,
      img: "Aap_uEBSAVR5eMQKyELJ3ybgTYiJv5Owxfx5qTFv2QLYlduqAlPtIaz7M9DDsrV5Nlhfy74Ny_zqtqDVdKeH1YZHnwWgERLWGckKgaJdMs4s5x0uav9HgwL_LaUzq2fJJLeuxFEXpMX07W-gbGdMHBBkZz--hLUzdhHgBLSxyepnDq4bYucW"
    },
    {
      name: "Miramar",
      lat: -38.2703168,
      lng: -57.8394498,
      img: "Aap_uEDiziWUBrjXgSq9L4PLe7L3s6halLvf5wQDsHXewH1Q6h0-TfgSaVc38ppd8uFhQbI7TBUxCXfxCaeX80ExzYcTDX7sFKj94lBiKCrkBbgoPkdt-hzjnyxn4gqlowX50HCCqPg86zOD_vyScJMDo1xtDSqJpk8BeZdcpNnxY6FaVMeA"
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [ciudad, setCiudad] = useState({});

  const verClimaCiudad = (ciudad) => {
    setShowModal(true);
    //console.log({ ciudad: ciudad.ciudad, pais: ciudad.pais });
    //setCiudad({ ciudad: ciudad.ciudad, pais: ciudad.pais });
    setCiudad({ name:ciudad.name, lat: ciudad.lat, lng: ciudad.lng, img:ciudad.img });    
  };

  //console.log(favoritesData[0]);

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
            <CityWeatherListItemLatLong
            ciudad={item} />
          </TouchableHighlight>
        )}
        keyExtractor={ city => city.name}
      />

      <View>
        <Modal isVisible={showModal} setIsVisible={setShowModal}>
          <CityWeatherCardLatLong ciudad={ciudad} />
        </Modal>
      </View>
    </>
  );
  
}
