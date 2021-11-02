//Función que realiza la consulta de la API OpenWeather
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }
//Retorna el objeto con los datos del clima reicibido desde la API
//Si el nombre de la ciudad está mal escrito o es '', retorna ''.

import React, { useState, useEffect } from "react";

export default function searchWeather(consulta) {
  const { ciudad, pais } = consulta;

  if (ciudad === "") return '';

  const [respuestaApi, setRespuestaApi] = useState({});

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async (consulta) => {
    const appId = "70d074f668b97a3a6b87fea11ded66d4";

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${appId}`;

    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setRespuestaApi(resultado);
    } catch (error) {
      return '';
    }
  };

  //para ver la respuesta de la API en consola
  console.log(respuestaApi);
  return respuestaApi;
}
