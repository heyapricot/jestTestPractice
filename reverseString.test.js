const reverseString = require("./reverseString");
test("returns the reverse counterpart of the input string", ()=>{
   expect(reverseString("Anita lava la tina")).toMatch("anit al aval atinA");
});