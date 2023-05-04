# React Weather App

---

This React weather app is a simple web application built with React and JavaScript. It features a custom CSS design optimized for mobile devices, but also fully responsive for larger screens. With this app, users can easily obtain the current weather conditions and a 7-day forecast for any city. The app leverages various APIs to retrieve weather data and validate city input, ensuring the accuracy and reliability of the information displayed.

#### Features
- This weather app is built using React and JavaScript and consists of three main components: Search, CurrentWeather, and Forecast. The logic for displaying each component is located in the App.js file.

- The [GeoCoding API](https://openweathermap.org/api/geocoding-api) provided by OpenWeather is used to validate the city entered by the user. It supports different languages, so users can enter the name of a city even if it is not in English. This API also provides the latitude and longitude coordinates needed to make calls to other APIs and retrieve weather information.

- The [CurrentWeather API](https://openweathermap.org/current) is used to fetch data for the current weather in the selected city, including temperature, wind, and humidity. An image is also displayed based on the weather description.

- The [Daily Forecast API](https://openweathermap.org/forecast16) is used to display the 7-day forecast, starting from the current day.



#### How to run the project locally:

To run the project locally, clone the repository (`git clone <repo_url>`)and perform the following command-line actions:

```
cd react-weather-app
npm install
```

Create a `.env` file with your OpenWeather API key: `REACT_APP_WEATHER_API_KEY=<your_api_key>`. You can sign up on [OpenWeather](https://openweathermap.org/api) website and get a key and a free plan.

Start your application: `npm start`

The application will automatically open in your browser at http://localhost:3000. 

#### Usage

To use the app, follow these steps:

1. Type the name of a location in the search bar and press enter.
2. The app will display the current weather data and the 7-day forecast for that location.

#### Technologies Used
- React
- HTML / pure CSS
- JavaScript

#### Libraries

- [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)