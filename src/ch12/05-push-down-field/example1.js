class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  get type() {return this._type;}
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`従業員のタイプコードが不正：${arg}`);
  }
  toString() {return `${this._name} (${this._type})`;}
}

class Engineer extends Employee {
  get type() {return "engineer";}
}
