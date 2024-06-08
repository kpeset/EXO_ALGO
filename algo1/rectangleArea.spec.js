// ⚠️ NE PAS TOUCHER CE FICHIER

const rectangleArea = require("./rectangleArea");

test("5, 10 doit retourner 50", () => {
  expect(rectangleArea(5, 10)).toBe(50);
});

test("7, 3 doit retourner 21", () => {
  expect(rectangleArea(7, 3)).toBe(21);
});
