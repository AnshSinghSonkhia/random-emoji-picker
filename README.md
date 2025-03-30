# 🎉  random-emoji-picker

A simple & fast emoji utility package that allows you to fetch random emojis, get emojis by category, list available categories, and search for emojis by keyword. Perfect for adding emoji fun to your JavaScript projects!

**Total number of emojis:** `1024`

[![npm](https://img.shields.io/npm/v/random-emoji-picker.svg)](https://www.npmjs.com/package/random-emoji-picker)  [![License](https://img.shields.io/npm/l/random-emoji-picker.svg)](LICENSE) 

# 📦 Installation

Install via npm

```sh
npm i random-emoji-picker
```

Install via yarn

```sh
yarn add random-emoji-picker
```

# 🚀 Usage

```js
const rep = require('random-emoji-picker');

console.log(rep.getRandomEmoji());

console.log(rep.getEmojiByCategory("animals")); // Example Output: "🐶"
console.log(rep.getEmojiByCategory("food"));    // Example Output: "🍕"
console.log(rep.getEmojiByCategory("unknown")); // Example Output: null

console.log(rep.listCategories());

console.log(rep.getAllEmojisByCategory("food")); 
// Example Output: ["🍕", "🍔", "🍎", "🍟", "🍩"]
console.log(rep.getAllEmojisByCategory("unknown")); 
// Example Output: []

console.log(rep.searchEmoji("cake"));  
// Example Output: [ '🥞', '🧁', '🍰', '🍰', '🧁', '🍰' ]
console.log(rep.searchEmoji("unknown"));  
// Example Output: []
```

# 📖 API Reference

| Function                  | Description                                              | Return Type | Example Usage                                      |
|---------------------------|----------------------------------------------------------|-------------|---------------------------------------------------|
| `getRandomEmoji()`        | Returns a completely random emoji from all categories.   | `string`    | `getRandomEmoji()` → `"😂"`                       |
| `getEmojiByCategory()`    | Returns a random emoji from the specified category (`category`: `string`, e.g., "animals", "food"). | `string`    | `getEmojiByCategory("animals")` → `"🐶"`          |
| `listCategories()`        | Returns an array of all available emoji categories.      | `string[]`  | `listCategories()` → `["happy", "sad", "animals", "food", ...]` |
| `getAllEmojisByCategory()`| Returns all emojis from the given category (`category`: `string`). | `string[]`  | `getAllEmojisByCategory("food")` → `["🍕", "🍔", "🍎"]` |
| `searchEmoji()`           | Searches for emojis that match a keyword (`keyword`: `string`). | `string[]`  | `searchEmoji("cake")` → `["🧁", "🍰"]`              |
