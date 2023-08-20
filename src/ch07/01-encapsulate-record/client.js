import { getRawDataOfOrganization } from "./organization.js";

let result = '';
result += `<h1>${getRawDataOfOrganization().name}</h1>`;
console.log(result);

const newName = 'Example';
getRawDataOfOrganization().name = newName;
console.log(getRawDataOfOrganization());
