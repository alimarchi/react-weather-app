import classes from "./CurrentWeather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTemperatureThreeQuarters,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const CurrentWeather = ({ data, onNewSearch, city }) => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today
    .toLocaleDateString("en-GB", options);

  return (
    <div className={classes["main-container"]}>
      <div className={classes["blue-container"]}></div>
      <div className={classes["weather-container"]}>
        <div className={classes.header} onClick={() => {onNewSearch()}}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className={classes.arrow}
          />{" "}
          <div className={classes["new-search"]}>New search</div>
        </div>
        <p className={classes.date}>{formattedDate}</p>
        <div className={classes["current-weather"]}>
          <div className={classes.top}>
            <div className={classes["image-container"]}>
              <img
                alt="weather"
                className={classes["weather-icon"]}
                src={`images/${data.weather[0].icon}.png`}
              />
            </div>
            <div>
              <p className={classes.city}>{city}</p>
              <p className={classes.temperature}>
                {Math.round(data.main.temp)}°C
              </p>
              <p className={classes["weather-description"]}>
                {data.weather[0].description}
              </p>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes["parameter-info"]}>
              <div>
                <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="xl" />
              </div>
              <div className={classes["parameter-value"]}>
                {Math.round(data.main.feels_like)}°C
              </div>
              <div className={classes["parameter-label"]}>Feels like</div>
            </div>
            <div className={classes["parameter-info"]}>
              <div>
                {" "}
                <FontAwesomeIcon icon={faWind} size="xl" />
              </div>
              <div className={classes["parameter-value"]}>
                {data.wind.speed} m/s
              </div>
              <div className={classes["parameter-label"]}>Wind</div>
            </div>
            <div className={classes["parameter-info"]}>
              <div>
                <FontAwesomeIcon icon={faDroplet} size="xl" />
              </div>
              <div className={classes["parameter-value"]}>
                {data.main.humidity}%
              </div>
              <div className={classes["parameter-label"]}>Humidity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
