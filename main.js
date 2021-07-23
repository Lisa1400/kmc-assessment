const Orbit = require("./objects/orbit");
const Vehicle = require("./objects/vehicle");
const Velocity = require("./objects/velocity");
const Weather = require("./objects/weather");
const TravelOptimised = require("./objects/travelOptimise");

function getAllVehicles() {
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

  orbits.push(new Orbit("Orbit 1", 18, 20, new Velocity(14, "megamiles/hour"))); // orbit 1 traffic speed 
  orbits.push(new Orbit("Orbit 2", 20, 10, new Velocity(20, "megamiles/hour"))); // orbit 2 traffic speed

  return orbits;
}

function getWeatherType(weatherType) {
  return getAllWeatherDetails().filter((weatherDetail) => {
    return weatherDetail.getWeatherType() === weatherType;
  });
}

function getSupportedVehiclesForWeather(supportedVehicles) {
  return getAllVehicles().filter((supportedVehicle) => {
    return supportedVehicles.includes(supportedVehicle.getVehicleName());
  });
}

function getOptimisedTrip(weather, vehicles, orbit) {
  let travellingOptimisations = [];

  vehicles.forEach((element) => {
    let optimisedTrip = new TravelOptimised();

    for (let j = 0; j < orbit.length; j++) {
      optimisedTrip.setTimeTravelled(
        calculateOptimisedTravelledTime(weather, element, orbit[j])
      );
      optimisedTrip.setOrbit(orbit);
      optimisedTrip.setVehicle(element);
    }

    travellingOptimisations.push(optimisedTrip);
  });

  let optimumTravel = null;
  let minimumTime = Number.MAX_VALUE;
  let optimumOrbit = null;

  for (let i = 0; i < travellingOptimisations.length; i++) {
    let travelledTime = travellingOptimisations[i].getTimeTravelled();

    if (travelledTime < minimumTime) {
      minimumTime = travelledTime;

      optimumTravel = travellingOptimisations[i];
    }
  }

  optimumOrbit =
    optimumTravel.vehicle.getTimeSpentInCrater() *
      optimumTravel.orbit[0].getNumberOfCraters() <
    optimumTravel.vehicle.getTimeSpentInCrater() *
      optimumTravel.orbit[1].getNumberOfCraters()
      ? 1
      : 2;

  return console.log(
    `Orbit ${optimumOrbit}  - Vehicle ${optimumTravel.vehicle.getVehicleName()}`
  );
}

function calculateOptimisedTravelledTime(weather, vehicle, orbit) {
  let distance = orbit["getDistance"]();

  let numberOfCratersInOrbit = orbit["getNumberOfCraters"]();

  let orbitSpeedLimit = orbit["getVelocityLimit"]()["getSpeed"]();

  let vehicleMaxSpeed = vehicle["getVelocity"]()["getSpeed"]();

  let applicableSpeedLimit =
    orbitSpeedLimit > vehicleMaxSpeed ? vehicleMaxSpeed : orbitSpeedLimit;

  let applicableNumberOfCraters =
    (numberOfCratersInOrbit * (100 + weather["getCraterChangeRate"]())) / 100.0;

  return (
    (distance * 60) / applicableSpeedLimit +
    applicableNumberOfCraters * vehicle["getTimeSpentInCrater"]()
  );
}

let weather = new getWeatherType("windy")[0] // input weather
let vehicles = new getSupportedVehiclesForWeather(weather.getSupportedVehicles()[0])

getOptimisedTrip(weather, vehicles, getAllOrbits())