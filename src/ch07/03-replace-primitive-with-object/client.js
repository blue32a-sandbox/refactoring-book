import { Order, Priority } from "./order.js";

const orders = [];
orders.push(new Order({priority: "low"}));
orders.push(new Order({priority: "normal"}));
orders.push(new Order({priority: "high"}));
orders.push(new Order({priority: "rush"}));
orders.push(new Order({priority: new Priority("rush")}));

const highPriorityCount = orders.filter(o => "high" === o.priority.toString()
                                          || "rush" === o.priority.toString())
                                .length;
console.log(highPriorityCount);
