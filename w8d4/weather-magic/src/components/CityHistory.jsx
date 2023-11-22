export default function CityHistory(props) {
  const { history, fetchWeatherInformation } = props;

  const parsedLi =
    Array.isArray(history) &&
    history.map((city) => (
      <li key={city}>
        <button onClick={() => fetchWeatherInformation(city)}>{city}</button>
      </li>
    ));
  return (
    <section className="CityHistory">
      <ul>{parsedLi}</ul>
    </section>
  );
}
