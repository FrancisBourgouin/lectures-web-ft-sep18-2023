# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  lastWatered: "date",
  wateringInterval: 0,
};
```

## Plants

- Array: Pro, easy to loop over Con: hard to find a specific element
- Object: Pro, easy to find a specific plant, Con, a lil harder to loop over

```jsx
const plants = [plant, plant];

const plants = { id: plant, id: plant }; // Access individual plants
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-02-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];

const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

### Components

### Component Data

- App (Props: null)
  - Header (Props: null)
  - Plant (Props: null)
    - PlantList (Props: null | State: plantsObj)
      - PlantListItem (Props: name,type,wateringInterval,lastWatered, fct waterplant)
    - WaterEverything (Props: fct water everythign)

Props
State:
