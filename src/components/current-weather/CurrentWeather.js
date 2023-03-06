import classes from "./CurrentWeather.module.css";

function CurrentWeather() {
  return (
    <div className={classes.weather}>
      <div className={classes.top}>
        <div>
          <p className={classes.city}>Málaga</p>
          <p className={classes["weather-description"]}>Sunny</p>
        </div>
        <img alt="weather" className={classes["weather-icon"]} src="" />
      </div>
      <div className={classes.bottom}>
        <p className={classes.temperature}>18°C</p>
        <div className={classes.details}>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Details</span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Feels like</span>
            <span className={classes["parameter-value"]}>22°C</span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Wind</span>
            <span className={classes["parameter-value"]}>2 m/s</span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Humidity</span>
            <span className={classes["parameter-value"]}>15%</span>
          </div>
          <div className={classes["parameter-row"]}>
            <span className={classes["parameter-label"]}>Pressure</span>
            <span className={classes["parameter-value"]}>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
