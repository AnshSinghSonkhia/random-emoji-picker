const listCategories = require("../src/listCategories");

test("listCategories returns an array of categories", () => {
  const categories = listCategories();
  expect(Array.isArray(categories)).toBe(true);
  expect(categories.length).toBeGreaterThan(0);
});
