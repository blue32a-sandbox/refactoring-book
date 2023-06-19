import fs from 'fs';
import createStatementData from './createStatementData';

const plays = JSON.parse(fs.readFileSync('src/part1/data/plays.json', 'utf8'));
const invoices = JSON.parse(fs.readFileSync('src/part1/data/invoices.json', 'utf8'));

test("createStatementData関数は劇と請求のデータから中間データを作成する", () => {
  const result = createStatementData(invoices[0], plays);

  expect(result.customer).toBe("BigCo");
  expect(result.totalAmount).toBe(173000);
  expect(result.totalVolumeCredits).toBe(47);
  expect(result.performances).toHaveLength(3);
  expect(result.performances[0]).toStrictEqual ({
    play: {
      name: "Hamlet",
      type: "tragedy"
    },
    amount: 65000,
    audience: 55,
    playID: "hamlet",
    volumeCredits: 25
  });
  expect(result.performances[1]).toStrictEqual ({
    play: {
      name: "As You Like It",
      type: "comedy"
    },
    amount: 58000,
    audience: 35,
    playID: "as-like",
    volumeCredits: 12
  });
  expect(result.performances[2]).toStrictEqual ({
    play: {
      name: "Othello",
      type: "tragedy"
    },
    amount: 50000,
    audience: 40,
    playID: "othello",
    volumeCredits: 10
  });
});
