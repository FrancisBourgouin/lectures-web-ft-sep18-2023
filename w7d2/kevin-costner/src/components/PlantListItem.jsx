// {
//   id: "4",
//   type: "GIMME THAT",
//   name: "Money Tree",
//   lastWatered: "2020-01-20",
//   wateringInterval: 1000,
//   waterPlant: fct(plant.id)
// }
const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered);
  const todayDate = new Date();

  const timeDiffInS = (todayDate.getTime() - lastWateredDate.getTime()) / 1000;
  const timeDiffInDays = timeDiffInS / 86400;

  return wateringInterval > timeDiffInDays;
};

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval, waterPlant, id } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const borderColor = isWellWatered ? "green" : "red";
  return (
    <li style={{ borderColor }} onClick={() => waterPlant(id)}>
      <h1>
        {name} | {type}
      </h1>
      <p>Last watered on: {lastWatered}</p>
    </li>
  );
}
