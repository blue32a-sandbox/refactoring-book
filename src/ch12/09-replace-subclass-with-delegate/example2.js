function createBird(bird) {
  switch (bird.type) {
  case 'NorwegianBlueParrot':
    return new NorwegianBlueParrot(bird);
  default:
    return new Bird(bird);
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.name;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }
  selectSpeciesDelegate(data) {
    switch(data.type) {
      case 'EuropeanSwallow':
        return new EuropeanSwallowDelegate();
      case 'AfricanSwallow':
        return new AfricanSwallowDelegate(data);
      case 'NorwegianBlueParrot':
        return new NorwegianBlueParrotDelegate(data, this);
      default: return null;
    }
  }
  get name() {return this._name;}
  get plumage() {
    return this._plumage || "average";
  }
  get airSpeedVelocity() {
    return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {return 35;}
}

class AfricanSwallowDelegate {
  constructor(data) {
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    return this._speciesDelegate.plumage;
  }
}

class NorwegianBlueParrotDelegate {
  constructor(data, bird) {
    this._bird = bird;
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    if (this._voltage > 100) return "scorched";
    else return this._bird._plumage || "beautiful";
  }
  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }
}
