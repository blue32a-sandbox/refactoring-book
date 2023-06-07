const plays = require('../data/plays.json');
const invoices = require('../data/invoices.json');
const { statement } = require('./statement');

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
