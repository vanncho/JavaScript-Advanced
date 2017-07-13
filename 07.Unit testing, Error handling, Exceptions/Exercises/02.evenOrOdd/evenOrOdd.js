function isOddOrEven(string) {

    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;

describe("Tests for Odd Or Even", () => {

    it("Should return undefined when pass a number", () => {
        expect(isOddOrEven(11)).to.be.undefined;
    });

    it("Should return odd for 'for'", () => {
        expect(isOddOrEven('for')).to.be.equal('odd');
    });

    it("Should return even for 'from'", () => {
        expect(isOddOrEven('from')).to.be.equal('even');
    });

});