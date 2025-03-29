const { formattedDatabase } = require("./emojiDatabase");

function searchEmoji(keyword) {
  if (!keyword || typeof keyword !== "string") return [];

  keyword = keyword.toLowerCase();
  const matchingEmojis = [];

  for (const category in formattedDatabase) {
    for (const emoji of formattedDatabase[category]) {
      if (emoji.keywords.some((word) => word.includes(keyword))) {
        matchingEmojis.push(emoji.symbol);
      }
    }
  }

  return matchingEmojis;
}

module.exports = searchEmoji;
