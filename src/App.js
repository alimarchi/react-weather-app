import { useState } from "react";
import classes from "./App.module.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import { WEATHER_API_URL } from "./api";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [valid, setValid] = useState(false);

  const handleOnSearchChange = (searchData) => {
    setValid(true);
    if (searchData) {
      const [lat, lon] = searchData.split(" ");
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forecastResponse = await response[1].json();
          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forecastResponse });
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <>
      {!valid && <Search onSearchChange={handleOnSearchChange} />}
      {valid && currentWeather && <CurrentWeather data={currentWeather} />}
      { valid && forecast && <Forecast data={forecast} />}
    </>
  );
}

export default App;
