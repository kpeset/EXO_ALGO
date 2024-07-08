// NE PAS TOUCHER !

const earthToTheMoon = require("./earthToTheMoon");

test("doit retourner le nombre de pliages pour atteindre la Lune", () => {
  const result = earthToTheMoon();
  expect(result).toBe(42);
});

console.log("Tous les tests sont passés !");
