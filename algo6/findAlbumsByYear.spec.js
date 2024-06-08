// ⚠️ NE PAS TOUCHER MEME SI VOUS DETESTEZ LA STAR ACADEMY !

const findAlbumsByYear = require("./findAlbumsByYear");

const albums = [
  { title: "The Dark Side of the Moon", year: 1973, artist: "Pink Floyd" },
  { title: "Back in Black", year: 1980, artist: "AC/DC" },
  { title: "Elvis Presley", year: 1976, artist: "Elvis Presley" },
  { title: "Showbiz", year: 1999, artist: "Muse" },
  { title: "Led Zeppelin IV", year: 1971, artist: "Led Zeppelin" },
  { title: "Star Academy", year: 2024, artist: "Star Academy" },
];

test("doit retourner les albums sortis en 1980", () => {
  const result = findAlbumsByYear(albums, 1980);
  expect(result).toEqual([
    { title: "Back in Black", year: 1980, artist: "AC/DC" },
  ]);
});

test("doit retourner les albums sortis en 1976", () => {
  const result = findAlbumsByYear(albums, 1976);
  expect(result).toEqual([
    { title: "Elvis Presley", year: 1976, artist: "Elvis Presley" },
  ]);
});

test("should return 'Aucun résultat' for a year with no albums", () => {
  const result = findAlbumsByYear(albums, 1990);
  expect(result).toBe("Aucun résultat");
});

test("doit retourner les albums sortis en 1999", () => {
  const result = findAlbumsByYear(albums, 1999);
  expect(result).toEqual([{ title: "Showbiz", year: 1999, artist: "Muse" }]);
});
