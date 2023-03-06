import classes from "./App.module.css";
import Search from "./components/search/Search";
import CurentWeather from "./components/current-weather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className={classes.container}>
      <Search onSearchChange={handleOnSearchChange} />
      <CurentWeather />
    </div>
  );
}

export default App;
