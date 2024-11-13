import React from "react";
import WeatherRapper from "./Components/WeatherRapper";
import { WeatherContextProvider } from "./Context/WeatherData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherContextProvider>
        <WeatherRapper />
      </WeatherContextProvider>
    </QueryClientProvider>
  );
};

export default App;
