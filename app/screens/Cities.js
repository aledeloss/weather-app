import React from "react";
import { View, Text } from "react-native";

import { CityItem } from "../components/CityItem"

export default function Cities() {
    
    return(
        <View>
            <Text>
                Hola!
                <CityItem/>
            </Text>
        </View>
    );
}