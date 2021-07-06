class Orbit {
  constructor(orbitName, distance, numberOfCraters, velocityLimit) {
    this.orbitName = orbitName;
    this.distance = distance;
    this.numberOfCraters = numberOfCraters;
    this.velocityLimit = velocityLimit;
  }
  getOrbitName() {
    return this.orbitName;
  }

  setOrbitName(newOrbitName) {
    this.orbitName = newOrbitName;
  }

  getDistance() {
    return this.distance;
  }

  setDistance(newDistance) {
    this.distance = newDistance;
  }

  getNumberOfCraters() {
    return this.numberOfCraters;
  }

  setNumberOfCraters(newNumberOfCraters) {
    this.numberOfCraters = newNumberOfCraters;
  }

  getVelocityLimit() {
    return this.velocityLimit;
  }

  setVelocityLimit(newVelocityLimit) {
    this.velocityLimit = newVelocityLimit;
  }
}
