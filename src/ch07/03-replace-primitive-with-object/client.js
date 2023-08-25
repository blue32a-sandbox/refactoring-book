import { Order, Priority } from "./order.js";

const orders = [];
orders.push(new Order({priority: "low"}));
orders.push(new Order({priority: "normal"}));
orders.push(new Order({priority: "high"}));
orders.push(new Order({priority: "rush"}));
orders.push(new Order({priority: new Priority("rush")}));

const highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal")))
                                .length;
console.log(highPriorityCount);
