module.exports = class TravelOptimised {
  constructor(timeTravelled, orbit, vehicle) {
    this.timeTravelled = timeTravelled;
    this.orbit = orbit;
    this.vehicle;
  }

  getTimeTravelled() {
    return this.timeTravelled;
  }

  setTimeTravelled(newTimeTravelled) {
    this.timeTravelled = newTimeTravelled;
  }

  getOrbit() {
    return this.orbit;
  }

  setOrbit(newOrbit) {
    this.orbit = newOrbit;
  }

  getVehicle() {
    return this.vehicle;
  }

  setVehicle(newVehicle) {
    this.vehicle = newVehicle;
  }
}
