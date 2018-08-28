const caesarCipher = require("./caesar_cipher");
describe("caesarCipher", ()=>{
    it("Encodes the received string using a key between 0 and 25", ()=>{
        expect(caesarCipher("attack at dawn",5)).toMatch("fyyfhp fy ifbs")
    });
    it("Keeps the original case", ()=>{
        expect(caesarCipher("ATTACK AT DAWN",5)).toMatch("FYYFHP FY IFBS")
    });
    it("Works with strings that use . as separator",()=>{
        expect(caesarCipher("ATTACK.AT.DAWN",5)).toMatch("FYYFHP.FY.IFBS")
    })
});