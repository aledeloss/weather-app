import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Cities from "../screens/Cities";

const Stack=createNativeStackNavigator();

export default function CitiesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="cities"
            component={Cities}
            options={{title:"Ciudades"}}
            />

        </Stack.Navigator>
    );
}