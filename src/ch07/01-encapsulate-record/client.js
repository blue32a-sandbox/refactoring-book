import { organization } from "./organization.js";

let result = '';
result += `<h1>${organization.name}</h1>`;
console.log(result);

const newName = 'Example';
organization.name = newName;
console.log(organization);
