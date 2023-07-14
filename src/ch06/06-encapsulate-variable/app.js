import { getDefaultOwner, setDefaultOwner } from "./defaultOwner.js";

const spaceship = {};
spaceship.owner = getDefaultOwner();

setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

console.log(spaceship.owner);
console.log(getDefaultOwner());
