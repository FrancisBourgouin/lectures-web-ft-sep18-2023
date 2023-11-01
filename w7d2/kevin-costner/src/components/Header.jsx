// {
//   amountOfPlants:0
// }
export default function Header(props) {
  const { amountOfPlants } = props;
  return (
    <header>
      <h1>KEVIN COSTNER'S SUPER WATERING WORLD</h1>
      <h2>Saving {amountOfPlants} plants from dehydration</h2>
    </header>
  );
}
