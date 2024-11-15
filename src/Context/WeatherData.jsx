import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import { AirPollution, CurrentWeatherData, DayHourlyForcast } from "../Api/Api";

export const weatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState("")
  const [cityName, setCityName] = useState("kalna");
  //! search city by city name

  //? fetch current data
  const {
    data: currentWeather,
    isLoading: currentWeatherLoading,
    refetch: currentWeatherRefetch,
  } = useQuery({
    queryKey: ["currentWeather",cityName],
    queryFn: () => CurrentWeatherData(cityName),
    enabled: true,
  });


  const {
    data: dayHourForcast,
    isLoading: dayHourForcastLoading,
    refetch: dayHourForcastRefetch,
  } = useQuery({
    queryKey: ["dayHourForcast",cityName],
    queryFn: () => DayHourlyForcast(cityName),
    enabled: true,
  });

  const {
    data: airPollution,
    isLoading: airPollutionLoading,
    refetch: airPollutionRefetch,
  } = useQuery({
    queryKey: ["airPollution",cityName],
    queryFn: () => AirPollution(currentWeather.coord.lat,currentWeather.coord.lon),
    enabled: true,
  });


  //! onclick handler search
  const handleSearch = () => {
    setCityName(city);
    currentWeatherRefetch();
    dayHourForcastRefetch()
    setCity("");
  };


  //? handle sumbit 
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(city);
    currentWeatherRefetch();
    dayHourForcastRefetch()
    setCity("");
  };




// ! user current location
const userLocation = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          // Example query with latitude and longitude
          const query = `${latitude},${longitude}`;
          
          const res = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?key=${
              import.meta.env.VITE_LOCATION_API_KEY
            }&q=${query}&pretty=1&no_annotations=1`
          );
          
          if (res.ok) {
            const data = await res.json();
            setCityName(data.results[0].components.state)
            // Process data here as needed
          } else {
            console.error("Error fetching location data:", res.statusText);
          }
        } catch (err) {
          console.error("Error in geolocation fetch:", err);
        }
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};



  return (
    <weatherContext.Provider
      value={{
        handleSearch,
        handleSubmit,
        city,
        setCity,
        //! current waether fetching data
        currentWeather,
        currentWeatherLoading,
        //! current waether fetching data
        //? 5 days & hourly fetching data
        dayHourForcast,
        //? 5 days & hourly fetching data
        // ! air pollution
        airPollution,
        // ! air pollution
        // ? user location
        userLocation,
        // ? user location
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};
