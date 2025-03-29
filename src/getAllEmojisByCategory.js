const { emojiDatabase } = require("./emojiDatabase");

function getAllEmojisByCategory(category) {
  return emojiDatabase[category] || [];
}

module.exports = getAllEmojisByCategory;
