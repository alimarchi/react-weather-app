import classes from "./CurrentWeather.module.css";

function CurrentWeather({ data }) {
  return (
    <div>
      <div className={classes.top}>
        <div>
          <p className={classes.city}>{data.city}</p>
          <p className={classes.temperature}>{Math.round(data.main.temp)}°C</p>
          <p className={classes["weather-description"]}>
            {data.weather[0].description}
          </p>
        </div>
        <div className={classes["image-container"]}>
          <img
            alt="weather"
            className={classes["weather-icon"]}
            src={`images/${data.weather[0].icon}.png`}
          />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.details}>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Feels like</span>
            <span className={classes["parameter-value"]}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Wind</span>
            <span className={classes["parameter-value"]}>
              {data.wind.speed} m/s
            </span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Humidity</span>
            <span className={classes["parameter-value"]}>
              {data.main.humidity}%
            </span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Pressure</span>
            <span className={classes["parameter-value"]}>
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
