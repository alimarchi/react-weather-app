import classes from "./Forecast.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  // slice does not mutate the original array, I want to display the first 7 items from the list array starting from the current day. dayInAWeek is the index of the current day in the array, so I want to display the first 7 items from the list array starting from the current day and then concatenate the rest of the array starting from the beginning of the array
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className={classes.title}>7-Day Forecast</label>
      <Accordion allowZeroExpanded>
        {/* I want to display the first 7 items from the list array */}
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={classes["daily-item"]}>
                  <img
                    alt="weather icon"
                    className={classes["icon-small"]}
                    src={`images/${item.weather[0].icon}.png`}
                  />
                  <label className={classes.day}>{forecastDays[index]}</label>
                  <label className={classes.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={classes["temperature"]}>
                    {Math.round(item.main.temp)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={classes["daily-details-grid"]}>
                <div className={classes["daily-details-grid-item"]}>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={classes["daily-details-grid-item"]}>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={classes["daily-details-grid-item"]}>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={classes["daily-details-grid-item"]}>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={classes["daily-details-grid-item"]}>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={classes["daily-details-grid-item"]}>
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
