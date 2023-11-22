import { useState } from "react";
import "./App.css";
import CityForm from "./components/CityForm";
import CityHistory from "./components/CityHistory";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchWeatherInformation = (cityName) => {
    const apiKey = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const isNotInHistory = !history.includes(cityName);
    axios
      .get(url)
      .then((res) => res.data)
      .then(setWeatherData)
      .then(() => isNotInHistory && setHistory([...history, cityName]))
      // .then(() => {
      //   if (isNotInHistory) {
      //     setHistory([...history, cityName]);
      //   }
      // })
      .catch((err) => {
        console.log(err);
        setWeatherData(null);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={(formData) => fetchWeatherInformation(formData.city)} />
        {history.length > 0 && (
          <CityHistory
            history={history}
            fetchWeatherInformation={fetchWeatherInformation}
          />
        )}
        {weatherData && <CurrentWeather weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
