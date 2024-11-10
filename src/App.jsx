import React from 'react'
import WeatherRapper from './Components/WeatherRapper'
import { WeatherContextProvider } from './Context/WeatherData'
const App = () => {
  return (
   <WeatherContextProvider>
    <WeatherRapper />
   </WeatherContextProvider>
  )
}

export default App