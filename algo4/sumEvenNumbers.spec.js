// ⚠️ Comme d'hab on touche pas :)

const sumEvenNumbers = require("./sumEvenNumbers");

test("[1, 2, 3, 4, 5, 6] doit retourner 12", () => {
  expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
});

test("[10, 21, 4, 8] doit retourner 22", () => {
  expect(sumEvenNumbers([10, 21, 4, 8])).toBe(22);
});

test("[1, 3, 5, 7] doit retourner 0", () => {
  expect(sumEvenNumbers([1, 3, 5, 7])).toBe(0);
});

test("[2, 4, 6, 8] doit retourner 20", () => {
  expect(sumEvenNumbers([2, 4, 6, 8])).toBe(20);
});
