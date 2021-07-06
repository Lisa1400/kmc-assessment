class Vehicle {
  constructor(vehicleName, velocity, timeSpentInCrater) {
    this.vehicleName = vehicleName;
    this.velocity = velocity;
    this.timeSpentInCrater = timeSpentInCrater;
  }

  getVehicleName() {
    return this.vehicleName;
  }

  setVehicleName(newVehicleName) {
    this.vehicleName = newVehicleName;
  }

  getVelocity() {
    return this.velocity;
  }

  setVelocity(newVelocity) {
    this.velocity = newVelocity;
  }

  getTimeSpentInCrater() {
    return this.timeSpentInCrater;
  }

  setTimeSpentInCrater(newTimeSpentInCrater) {
    this.timeSpentInCrater = newTimeSpentInCrater;
  }
}
