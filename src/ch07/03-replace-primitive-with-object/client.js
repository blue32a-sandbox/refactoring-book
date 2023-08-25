import { Order } from "./order.js";

const orders = [];
orders.push(new Order({priority: "low"}));
orders.push(new Order({priority: "normal"}));
orders.push(new Order({priority: "high"}));
orders.push(new Order({priority: "rush"}));

const highPriorityCount = orders.filter(o => "high" === o.priorityString
                                          || "rush" === o.priorityString)
                                .length;
console.log(highPriorityCount);
