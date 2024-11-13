import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

//! Get request for current weather data
export const CurrentWeatherData = async (city) => {
  const response = await api.get(`/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);
  return response.data
};





//? hourly forcast data

  export const DayHourlyForcast = async (city) => {
    const response = await api.get(
      `/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  };



  // ? air pollution
  export const AirPollution = async (lat,lon) => {
    const response = await api.get(
      `/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  };