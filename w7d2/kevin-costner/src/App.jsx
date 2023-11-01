import logo from "./logo.svg";
import "./App.css";
import Plant from "./components/Plant";
import Header from "./components/Header";
import { useState } from "react";
import { plantsObj } from "./data/plantData";

function App() {
  const [count, setCount] = useState(0);
  const [plants, setPlants] = useState(plantsObj);
  const plantListData = Object.values(plants);

  const incrementCount = () => {
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
  };

  const waterPlant = (plantId) => {
    const today = new Date();

    const updatedPlants = { ...plants };
    const updatedPlant = { ...plants[plantId] };

    updatedPlant.lastWatered = today.toLocaleDateString();

    updatedPlants[plantId] = updatedPlant;

    setPlants(updatedPlants);

    console.log("Updated watering");
  };

  const waterAllThePlants = () => {
    const today = new Date();
    const updatedPlants = { ...plants };

    for (const plantId in plants) {
      const updatedPlant = { ...plants[plantId] };
      updatedPlant.lastWatered = today.toLocaleDateString();
      updatedPlants[plantId] = updatedPlant;
    }

    setPlants(updatedPlants);
  };

  return (
    <div className="App">
      <Header amountOfPlants={plantListData.length} />
      <Plant
        plantListData={plantListData}
        waterPlant={waterPlant}
        waterAllThePlants={waterAllThePlants}
      />
      <h1 onClick={incrementCount}>{count}</h1>
    </div>
  );
}

export default App;
