import React from "react";
import { View, Text } from "react-native";
import climaCiudad from "../services/consultarClima";

export default function Cities() {
  const consulta = {
    ciudad: "Mendoza",
    pais: "AR",
  };

  const clima = climaCiudad({ consulta });

  return (
    <View>
      <Text>Ciudades</Text>
      <Text>$clima</Text>
    </View>
  );
}
