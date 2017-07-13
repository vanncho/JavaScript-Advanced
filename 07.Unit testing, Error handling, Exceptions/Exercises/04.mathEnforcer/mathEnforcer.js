let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe("Tests for Math Enforcer", () => {

    // addFive
    it("Should return undefined when addFive with string", () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
    });

    it("Should return 10 when addFive with 5", () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
    });

    it("Should return 0 when addFive with -5", () => {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });

    it("Should return 5.5 when addFive with 0.5", () => {
        expect(mathEnforcer.addFive(0.5)).to.be.equal(5.5);
    });

    it("Should return undefined when addFive with no parameter", () => {
        expect(mathEnforcer.addFive()).to.be.undefined;
    });

    // subtractTen
    it("Should return undefined when subtractTen with string", () => {
        expect(mathEnforcer.subtractTen('10')).to.be.undefined;
    });

    it("Should return 10 when subtractTen with 20", () => {
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
    });

    it("Should return 0 when subtractTen with 10", () => {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
    });

    it("Should return -20 when subtractTen with -10", () => {
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
    });

    it("Should return 0.5 when subtractTen with 10.5", () => {
        expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
    });

    it("Should return undefined when subtractTen with no parameter", () => {
        expect(mathEnforcer.subtractTen()).to.be.undefined;
    });

    // sum
    it("Should return undefined when sum with first parameter string", () => {
        expect(mathEnforcer.sum('10', 10)).to.be.undefined;
    });

    it("Should return undefined when sum with second parameter string", () => {
        expect(mathEnforcer.sum(10, '10')).to.be.undefined;
    });

    it("Should return undefined when sum with both parameters string", () => {
        expect(mathEnforcer.sum('10', '10')).to.be.undefined;
    });

    it("Should return 10 when sum 5 with 5", () => {
        expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
    });

    it("Should return 10 when sum 15 with -5", () => {
        expect(mathEnforcer.sum(15, -5)).to.be.equal(10);
    });

    it("Should return -10 when sum -15 with 5", () => {
        expect(mathEnforcer.sum(-15, 5)).to.be.equal(-10);
    });

    it("Should return -10 when sum -5 with -5", () => {
        expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
    });

    it("Should return 5.5 when sum 5 with 0.5", () => {
        expect(mathEnforcer.sum(5, 0.5)).to.be.equal(5.5);
    });

    it("Should return 4.5 when sum 0.5 with 4", () => {
        expect(mathEnforcer.sum(0.5, 4)).to.be.equal(4.5);
    });

    it("Should return 6.1 when sum 5.6 with 0.5", () => {
        expect(mathEnforcer.sum(5.6, 0.5)).to.be.equal(6.1);
    });

    it("Should return undefined when sum with no parameters", () => {
        expect(mathEnforcer.sum()).to.be.undefined;
    });

    it("Should return undefined when sum with one parameter", () => {
        expect(mathEnforcer.sum(10)).to.be.undefined;
    });

    it("Should return undefined when sum with undefined and one parameter", () => {
        expect(mathEnforcer.sum(undefined, 10)).to.be.undefined;
    });

    it("Should return undefined when sum undefined with undefined", () => {
        expect(mathEnforcer.sum(undefined, undefined)).to.be.undefined;
    });
});