// ⚠️ NON :) ! ON NE MODIFIE RIEN ICI !

const sumArray = require("./sumArray");

test("[1, 2, 3, 4] est censé retourner 10", () => {
  expect(sumArray([1, 2, 3, 4])).toBe(10);
});

test("[10, 20, 30] est censé retourner 60", () => {
  expect(sumArray([10, 20, 30])).toBe(60);
});

test("[] est censé retourner 0", () => {
  expect(sumArray([])).toBe(0);
});

test("[5, -5, 10] est censé retourner 10", () => {
  expect(sumArray([5, -5, 10])).toBe(10);
});
