import { useState } from "react";
import classes from "./Search.module.css";

function Search({ onSearchChange, onCityChange }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const handleOnChange = (event) => {
    // set as search value what the user types
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  const handleSearch = () => {
    // fetch the data from the api using searchValue
    const searchValue = search.trim();
    if (searchValue === "") {
      setError("Please enter a city!");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.length > 0) {
            const city = `${response[0].name}, ${response[0].country}`;
            const selected = `${response[0].lat} ${response[0].lon}`;
            handleOnSelect(selected, city);
          } else {
            setError("City not found. Please try again!");
            setTimeout(() => {
              setError(null);
            }, 2000);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const handleOnSelect = (selectedOption, city) => {
    onSearchChange(selectedOption);
    onCityChange(city);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <h2>My Weather App</h2>
      </div>
      <div className={classes["input-container"]}>
        {error !== null && <div className={classes.error}>{error}</div>}
        <input
          type="text"
          placeholder="Search for a city..."
          className={classes.input}
          value={search}
          onChange={handleOnChange}
        ></input>
        <button className={classes["search-button"]} onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Search;
