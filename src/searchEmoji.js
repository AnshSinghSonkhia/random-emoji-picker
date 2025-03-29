const emojiDatabase = require("./emojiDatabase");

function searchEmoji(keyword) {
  keyword = keyword.toLowerCase();
  return Object.values(emojiDatabase)
    .flat()
    .filter(emoji => emoji.keywords?.some(k => k.includes(keyword)));
}

module.exports = searchEmoji;
