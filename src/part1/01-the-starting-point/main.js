const plays = require('../data/plays.json');
const invoices = require('../data/invoices.json');
const { statement } = require('./statement');

const result = statement(invoices[0], plays);
console.log(result);
