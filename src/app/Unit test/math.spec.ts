import { Math } from './math';

describe("Math",function(){
    var math;
    beforeEach(function(){
        math = new Math();
    })
    describe("Add", ()=>{
    it("Add should return sum of two numbers",function(){
        var result = math.add(10,20);
        expect(result).toBe(30);
        })
    })

    describe("Sub", function(){
    it("substract should return difference of two numbers", function(){
        var result = math.substract(20,10);
        expect(result).toBe(10);
        })

    it("First parameter to be greater then second",function(){
        var result = math.substract(10,20);
        expect(result).toBe(-1);
        })
    })

    afterEach(function(){
        math=null;
    })
});