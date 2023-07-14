let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

const spaceship = {};
spaceship.owner = defaultOwner;

defaultOwner = {firstName: "Rebecca", lastName: "Parsons"};

console.log(spaceship.owner);
console.log(defaultOwner);
