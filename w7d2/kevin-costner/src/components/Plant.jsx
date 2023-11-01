import PlantList from "./PlantList";
import WaterEverything from "./WaterEverything";

export default function Plant(props) {
  const { plantListData, waterAllThePlants, waterPlant } = props;
  return (
    <main>
      <h1>Plants</h1>
      <PlantList plantListData={plantListData} waterPlant={waterPlant} />
      <WaterEverything waterAllThePlants={waterAllThePlants} />
    </main>
  );
}
