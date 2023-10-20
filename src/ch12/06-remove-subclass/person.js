class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }

  get name() {return this._name;}
  get genderCode() {return this._genderCode;}
  get isMale() {return "M" === this._genderCode;}
  // 後は省略
}

class Female extends Person {
  get genderCode() {return "F";}
}

function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Person(aRecord.name, "M");
    case 'F': return new Female(aRecord.name);
    default:  return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}

// client...
const numberOfMales = people.filter(p => p.isMale).length;
