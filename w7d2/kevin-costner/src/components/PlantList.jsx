// {
//   plantListData:[]
//   waterPlant:fct
// }

import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plantListData, waterPlant } = props;

  const parsedPlants = plantListData.map((plant) => (
    <PlantListItem key={plant.id} {...plant} waterPlant={waterPlant} />
  ));

  return <ul>{parsedPlants}</ul>;
}
