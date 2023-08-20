import { getOrganization } from "./organization.js";

let result = '';
result += `<h1>${getOrganization().name}</h1>`;
console.log(result);

const newName = 'Example';
getOrganization().name = newName;
console.log(getOrganization());
