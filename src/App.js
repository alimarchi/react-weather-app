import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./App.module.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import {  WEATHER_API_URL } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [visible, setVisible] = useState(true);

  const handleOnSearchChange = (searchData) => {
    // In my object I have a value property that contains the lat and lon, as a string, separated by a space
    const [lat, lon] = searchData.value.split(" ");

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
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <>
      {ReactDOM.createPortal(<Search onSearchChange={handleOnSearchChange} visible={visible} />, document.querySelector("#modal"))}
    </>
    
    // <div className={classes.container}>
    //   <Search onSearchChange={handleOnSearchChange} />
    //   {currentWeather && <CurrentWeather data={currentWeather} />}
    //   {forecast && <Forecast data={forecast} />}
    // </div>
  );
}

export default App;
