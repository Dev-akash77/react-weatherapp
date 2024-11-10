import React from "react";
import { createContext } from "react";
export const weatherContext = createContext();
export const WeatherContextProvider = ({ children }) => {
  
  return (
    <weatherContext.Provider value={{}}>
      {children}
    </weatherContext.Provider>
  );
};

