import { Person, Department } from "./company.js";

const aPerson = new Person("Martin");
aPerson.department = new Department();;

const manager = aPerson.manager;
