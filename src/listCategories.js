const emojiDatabase = require("./emojiDatabase");

function listCategories() {
  return Object.keys(emojiDatabase);
}

module.exports = listCategories;
