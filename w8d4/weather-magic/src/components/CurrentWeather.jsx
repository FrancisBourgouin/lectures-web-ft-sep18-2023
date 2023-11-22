export default function CurrentWeather(props) {
  const { weatherData } = props;
  const temperature = Math.round(weatherData.main.temp - 273.15);
  const conditions = weatherData.weather[0].description;
  const name = weatherData.name;
  return (
    <section className="CurrentWeather">
      <h1>Current weather for : {name}</h1>
      <h2>Temp is {temperature}°C</h2>
      <p>Conditions are : {conditions}</p>
    </section>
  );
}
