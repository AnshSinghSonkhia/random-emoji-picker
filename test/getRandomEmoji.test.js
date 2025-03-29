const getRandomEmoji = require("../src/getRandomEmoji");

test("getRandomEmoji returns a valid emoji", () => {
  const emoji = getRandomEmoji();
  expect(typeof emoji).toBe("string");
  expect(emoji.length).toBeGreaterThan(0);
});
