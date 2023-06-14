import fs from 'fs';
import { statement, htmlStatement } from './statement';

const plays = JSON.parse(fs.readFileSync('src/part1/data/plays.json', 'utf8'));
const invoices = JSON.parse(fs.readFileSync('src/part1/data/invoices.json', 'utf8'));

test("statement関数は劇と請求のデータから請求書を作成する", () => {
  const result = statement(invoices[0], plays);

  expect(result).toBe(`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`);
});

test("htmlStatement関数は劇と請求のデータからHTML版の請求書を作成する", () => {
  const result = htmlStatement(invoices[0], plays);

  expect(result).toBe(`<h1>Statement for BigCo</h1>
<table>
  <tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>
`);
});
