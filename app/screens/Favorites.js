import React from "react";
import { ScrollView, View, Text } from "react-native";

import { FavoriteItem } from "../components/FavoriteItem"

export default function Favorites() {

    const favoritesData = [
        {
            "ciudad": "Mar del Plata",
            "pais": "AR"
        },
        {
            "ciudad": "Bariloche",
            "pais": "AR"
        },
        {
            "ciudad": "Miramar",
            "pais": "AR"
        }
    ]
    
    return(
            <ScrollView>
                {
                    favoritesData.map((city, key) => {
                        console.log(city.ciudad)
                        return <FavoriteItem key={key} number={key} cityName={city.ciudad}/>
                    })
                }
            </ScrollView>
    );
}