class Weather {
  constructor(weatherType, craterChangeRate, ...supportedVehicles) {
    this.weatherType = weatherType;
    this.craterChangeRate = craterChangeRate;
    this.supportedVehicles = supportedVehicles;
  }

  getWeatherType() {
    return this.weatherType;
  }

  setWeatherType(newWeatherType) {
    this.weatherType = newWeatherType;
  }

  getCraterChangeRate() {
    return this.craterChangeRate;
  }

  setCraterChangeRate(newCraterChangeRate) {
    this.craterChangeRate = newCraterChangeRate;
  }

  getSupportedVehicles() {
    return this.supportedVehicles;
  }

  setSupportedVehicles(newSupportedVehicles) {
    this.supportedVehicles = newSupportedVehicles;
  }
}
