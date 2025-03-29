const emojiDatabase = require('../src/emojiDatabase'); // Adjust path if needed

let totalEmojis = 0;

for (const category in emojiDatabase) {
    totalEmojis += emojiDatabase[category].length;
}

console.log(`Total number of emojis: ${totalEmojis}`);