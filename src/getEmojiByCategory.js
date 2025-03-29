const emojiDatabase = require("./emojiDatabase");

function getEmojiByCategory(category) {
  if (!emojiDatabase[category]) return null;
  const emojis = emojiDatabase[category];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

module.exports = getEmojiByCategory;
