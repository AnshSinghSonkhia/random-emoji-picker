const getEmojiByCategory = require("../src/getEmojiByCategory");

test("getEmojiByCategory returns an emoji from the category", () => {
  const emoji = getEmojiByCategory("happy");
  expect(typeof emoji).toBe("string");
  expect(emoji.length).toBeGreaterThan(0);
});

test("getEmojiByCategory returns null for invalid category", () => {
  expect(getEmojiByCategory("unknown")).toBeNull();
});
