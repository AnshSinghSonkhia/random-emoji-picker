const getAllEmojisByCategory = require("../src/getAllEmojisByCategory");

test("getAllEmojisByCategory returns all emojis in a category", () => {
  const emojis = getAllEmojisByCategory("happy");
  expect(Array.isArray(emojis)).toBe(true);
  expect(emojis.length).toBeGreaterThan(0);
});

test("getAllEmojisByCategory returns an empty array for invalid category", () => {
  expect(getAllEmojisByCategory("unknown")).toEqual([]);
});
