module.exports = class Velocity {
  constructor(speed, unit) {
    this.speed = speed;
    this.unit = unit;
  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getUnit() {
    return this.unit;
  }

  setUnit() {
    this.unit = newUnit;
  }
}
