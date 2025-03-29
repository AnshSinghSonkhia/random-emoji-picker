const emojiDatabase = require("./emojiDatabase");

function getRandomEmoji() {
  const allEmojis = Object.values(emojiDatabase).flat();
  return allEmojis[Math.floor(Math.random() * allEmojis.length)];
}

module.exports = getRandomEmoji;
