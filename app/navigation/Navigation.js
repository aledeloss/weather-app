import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Cities from "../screens/Cities";
import Favorites from "../screens/Favorites";
import AboutUs from "../screens/AboutUs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

// Este componente contiene todos los tabs de la navegación de la app.

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="home"
       screenOptions={({ route }) => ({
        tabBarIcon: ({color,focused }) => {
          let iconName;

          switch (route.name) {
              case "favorites":
                  iconName=focused
                  ?"heart"
                  :"heart-outline"
                  break;
              case "home":
                  iconName=focused
                  ?"home"
                  :"home-outline"
                    break;
              case "aboutUs":
                  iconName=focused
                  ?"account-multiple"
                  :"account-multiple-outline"
                  break; 
              case "cities":
                  iconName=focused
                  ?"home-search"
                  :"home-search-outline"
                  break;          
              default:
                  break;
          }

          // You can return any component that you like here!
          return <Icon type="material-community" name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
       >
        <Tab.Screen
          name="home"
          component={Home}
          options={{ title: "Inicio" }}

        />
        <Tab.Screen
          name="cities"
          component={Cities}
          options={{ title: "Ciudades" }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="aboutUs"
          component={AboutUs}
          options={{ title: "Nosotros" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOption(route, color) {
    let iconName;
    switch (route.name) {
        case "Inicio":
            iconName="house-outline"
            break;
    
        default:
            break;
    }
    return(
        <Icon type="material-commuty" name={iconName} size={22} color={color}/>
    )
}