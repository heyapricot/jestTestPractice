const calc = require('./calculator');
const Calculator = calc.Calculator;

let calculator = new Calculator();

describe("calculator", ()=>{
    it("adds two numbers", ()=>{
        expect(calculator.add(17,8)).toBe(25);
    });
    it("substracts two numbers", ()=>{
        expect(calculator.substract(17,8)).toBe(9);
    });
    it("divides two numbers", ()=>{
        expect(calculator.divide(144,12)).toBe(12);
    });
    it("multiplies two numbers", ()=>{
       expect(calculator.multiply(13,13)).toBe(169);
    })
});