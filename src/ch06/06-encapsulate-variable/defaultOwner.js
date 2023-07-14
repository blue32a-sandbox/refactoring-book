let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};

export function defaultOwner() {return new Person(defaultOwnerData);}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {return this._lastName;}
  set lastName(lastName) {this._lastName = lastName;}
  get firstName() {return this._firstName};
  set firstName(firstName) {this._firstName = firstName;}
}
