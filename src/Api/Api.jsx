import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

//! Get request for current weather data
export const CurrentWeatherData = async (city) => {
  if (!city) return null; // Prevent API call if city is empty

  try {
    const response = await api.get(
      `/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error?.response?.data?.message || error.message);
    throw error; // This ensures React Query recognizes it as an error
  }
};


//? hourly forcast data

export const DayHourlyForcast = async (city) => {
  try {
    const response = await api.get(
      `/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// ? air pollution
export const AirPollution = async (lat, lon) => {
  try {
    const response = await api.get(
      `/air_pollution?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
