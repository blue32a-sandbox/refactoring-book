import { defaultOwner, setDefaultOwner } from "./defaultOwner.js";

const spaceship = {};
spaceship.owner = defaultOwner();

setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

console.log(spaceship.owner);
console.log(defaultOwner());
