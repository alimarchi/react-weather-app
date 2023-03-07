import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
import classes from "./Search.module.css";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    // I fetch the data from the api. I use the inputValue to search for cities that start with the letters that the user typed in the search bar and I only return cities with a population of 2000 or more.
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=2000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        // it returns an array of objects. Each object represents a city. I map over the array and return an object with the value and label properties. The value property is the latitude and longitude of the city, I need them for the weather api I'm going to use. The label property is the name of the city and the country code.
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  // handleOnChange is a function that is called when the user selects a city from the dropdown list.
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    // onSearchChange is a function that is passed down from the parent component. It is called when the user selects a city from the dropdown list.
    onSearchChange(searchData);
  };

  return (
    // asyncPaginate is a component that I imported from a library called react-select-async-paginate. It allows you to search for a city and then select it.
    <AsyncPaginate
      placeholder="Search for a city"
      // debounceTimeout is the amount of time in milliseconds that the user has to stop typing before the search is executed.
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      // we use an api to search for cities. The api is called when the user types in the search bar.
      loadOptions={loadOptions}
      className={classes.search}
    />
  );
}

export default Search;
