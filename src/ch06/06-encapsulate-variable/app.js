let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

function getDefaultOwner() {return defaultOwner;}
function setDefaultOwner(arg) {defaultOwner = arg;}

const spaceship = {};
spaceship.owner = getDefaultOwner();

setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

console.log(spaceship.owner);
console.log(getDefaultOwner());
