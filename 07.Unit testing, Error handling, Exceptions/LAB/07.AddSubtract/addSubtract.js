function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

let expect = require('chai').expect;

describe("Tests for RGB to HEX", () => {

    let calc;

    before(function () {
        calc = createCalculator();
    });

    it("Should return an object", () => {
        expect(typeof calc).to.be.equal('object');
    });

    it("Should return 0 for create; get;", () => {
        let val = calc.get();
        expect(val).to.be.equal(0);
    });

    it("Should return 5 for create; add(2); add(3); get", () => {
        calc.add(2);
        calc.add(3);
        let val = calc.get();
        expect(val).to.be.equal(5);
    });

    it("Should return -5 for create; subtract(3); subtract(2); get", () => {
        calc = createCalculator();
        calc.subtract(3);
        calc.subtract(2);
        let val = calc.get();
        expect(val).to.equal(-5);
    });

    it("Should return 4.2 for create; add(5.3); subtract(1.1); get", () => {
        calc = createCalculator();
        calc.add(5.3);
        calc.subtract(1.1);
        let val = calc.get();
        expect(val).to.be.closeTo(4.2, 0.0001);
    });

    it("Should return 2 for create; add(10); subtract('7'); add('-2'); subtract(-1); get", () => {
        calc = createCalculator();
        calc.add(10);
        calc.subtract(7);
        calc.add(-2);
        calc.subtract(-1);
        let val = calc.get();
        expect(val).to.be.equal(2);
    });

    it("Should return NaN for create; add('hello'); get", () => {
        calc.add('hello');
        let val = calc.get();
        expect(val).to.be.NaN;
    });

    it("Should return NaN for create; subtract('hello'); get", () => {
        calc.subtract('hello');
        let val = calc.get();
        expect(val).to.be.NaN;
    });

    it("Should return NaN for create; subtract('hello'); get", () => {
        calc.subtract('hello');
        let val = calc.get();
        expect(val).to.be.NaN;
    });

    it("Should work with numbers as string create; add('5'); get", () => {
        calc = createCalculator();
        calc.add('5');
        let val = calc.get();
        expect(val).to.be.equal(5);
    });
});