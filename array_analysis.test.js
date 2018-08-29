const analyze = require("./array_analysis");

describe('analyze', ()=>{
    describe('output', ()=>{
        const array = [1,8,3,4,2,6];
        const output = analyze(array);
        it('is an object', ()=>{
            expect(output).toBeInstanceOf(Object)
        });
        it('returns the array content average as a property', ()=>{
            expect(output).toHaveProperty('average');
            expect(output.average).toBe(4)
        });
        it('returns the array content min value as a property', ()=>{
            expect(output).toHaveProperty('min');
            expect(output.min).toBe(1)
        });
        it('returns the array content max value as a property', ()=>{
            expect(output).toHaveProperty('max');
            expect(output.max).toBe(8)
        });
        it('returns the array length as a property', ()=>{
            expect(output).toHaveProperty('length');
            expect(output.length).toBe(array.length)
        });
    })
});