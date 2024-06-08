// ⚠️ NE SURTOUT PAS TOUCHER !!! :)

const max = require("./max");

test("4, 7 doit retourner 7", () => {
  expect(max(4, 7)).toBe(7);
});

test("10, 5 doit retourner 10", () => {
  expect(max(10, 5)).toBe(10);
});

test("3, 3 doit retourner 3", () => {
  expect(max(3, 3)).toBe(3);
});

test("-1, 5 doit retourner 5", () => {
  expect(max(-1, 5)).toBe(5);
});
