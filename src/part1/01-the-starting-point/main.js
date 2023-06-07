import fs from 'fs';
import statement from './statement.js';

const plays = JSON.parse(fs.readFileSync('src/part1/data/plays.json', 'utf8'));
const invoices = JSON.parse(fs.readFileSync('src/part1/data/invoices.json', 'utf8'));

const result = statement(invoices[0], plays);
console.log(result);
