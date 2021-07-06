const Orbit = require("./objects/orbit");
const Vehicle = require("./objects/vehicle");
const Velocity = require("./objects/velocity");
const Weather = require("./objects/weather");
const TravelOptimised = require("./objects/travelOptimise");

function getAllVehicle() {
  let vehicles = [];

  vehicles.push(new Vehicle("bike", new Velocity(10, "megamiles/hour"), 2));
  vehicles.push(new Vehicle("tuktuk", new Velocity(12, "megamiles/hour"), 1));
  vehicles.push(new Vehicle("car", new Velocity(20, "megamiles/hour"), 3));

  return vehicles;
}

function getAllWeatherDetails() {
  let weatherTypes = [];

  weatherTypes.push(new Weather("sunny", -10, ["bike", "tuktuk", "car"]));
  weatherTypes.push(new Weather("rainy", -20, ["bike", "tuktuk", "car"]));
  weatherTypes.push(new Weather("windy", 0, ["bike", "tuktuk", "car"]));

  return weatherTypes;
}

function getAllOrbits() {
  let orbits = [];

  orbits.push(new Orbit("Orbit 1", 18, 20, new Velocity(14, "megamiles/hour")));
  orbits.push(new Orbit("Orbit 2", 20, 10, new Velocity(20, "megamiles/hour")));

  return orbits;
}
