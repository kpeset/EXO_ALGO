// ⚠️ NE PAS TOUCHER CE FICHIER

const circumference = require("./circumference");

test("5 doit retourner 31.41592653589793", () => {
  expect(circumference(5)).toBeCloseTo(31.41592653589793, 10);
});

test("10 doit retourner 62.83185307179586", () => {
  expect(circumference(10)).toBeCloseTo(62.83185307179586, 10);
});
