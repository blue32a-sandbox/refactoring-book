import assert from 'assert';
import { defaultOwner, setDefaultOwner } from "./defaultOwner.js";

const owner1 = defaultOwner();
assert.equal("Fowler", owner1.lastName, "when set");
const owner2 = defaultOwner();
owner2.lastName = "Parsons";
assert.notEqual("Parsons", owner1.lastName, "after change owner2");
