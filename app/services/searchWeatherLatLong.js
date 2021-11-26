//Función que realiza la consulta de la API OpenWeather
//Recibe { ciudad: 'NombreCiudad', pais: 'SiglaPais' }
//Retorna el objeto con los datos del clima reicibido desde la API
//Si el nombre de la ciudad está mal escrito o es '', retorna ''.

import React, { useState, useEffect } from "react";

export default function searchWeatherLatLong(consulta) {
  //console.log(consulta);
  const { lat, lng, name, img } = consulta;
  

  if (lat === "") return '';

  const [respuestaApi, setRespuestaApi] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async (consulta) => {
    const appId = "70d074f668b97a3a6b87fea11ded66d4";

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${appId}&lang=es`;

    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setRespuestaApi(resultado);
      setLoading(false);
    } catch (error) {
      return '';
    }
  };

  //para ver la respuesta de la API en consola
  //console.log(respuestaApi.name);
  //console.log(loading);
  return [respuestaApi, loading];
}
