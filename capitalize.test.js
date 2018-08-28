const capitalize = require("./capitalize");

test("changes a string's first char to capital", () => {
   expect(capitalize("test")).toBe("Test");
});