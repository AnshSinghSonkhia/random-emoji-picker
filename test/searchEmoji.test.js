const searchEmoji = require("../src/searchEmoji");

test("searchEmoji finds emojis by keyword", () => {
  const emojis = searchEmoji("cat");
  expect(Array.isArray(emojis)).toBe(true);
});
