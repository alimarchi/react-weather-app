import classes from "./Forecast.module.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  // slice does not mutate the original array, I want to display the first 7 items from the list array starting from the current day. dayInAWeek is the index of the current day in the array, so I want to display the first 7 items from the list array starting from the current day and then concatenate the rest of the array starting from the beginning of the array
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className={classes["forecast-container"]}>
      <h3 className={classes["forecast-title"]}>7-Day Forecast</h3>
      <table className={classes["forecast-table"]}>
        <tbody>
          {/* I want to display the first 7 items from the list array */}
          {data.list.splice(0, 7).map((item, index) => (
            <tr key={index} className={classes.row}>
              <td
                className={`${classes["forecast-info"]} ${classes["forecast-day"]}`}
              >
                {forecastDays[index].slice(0, 3)}
              </td>
              <td>
                <img
                  alt="weather icon"
                  className={classes["icon-small"]}
                  src={`images/${item.weather[0].icon}.png`}
                />
              </td>
              <td className={classes["forecast-info"]}>
                {item.weather[0].description}
              </td>
              <td className={classes["forecast-info"]}>
                {Math.round(item.main.temp)}°C
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
