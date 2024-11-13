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
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};
