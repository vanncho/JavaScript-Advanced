function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe("Tests for Char Lookup", () => {

    it("Should return undefined when passed string is not string", () => {
        expect(lookupChar(11, 11)).to.be.undefined;
    });

    it("Should return undefined when passed index is not a number", () => {
        expect(lookupChar('string', '11')).to.be.undefined;
    });

    it("Should return Incorrect index when passed index is equal to string length", () => {
        expect(lookupChar('abcd', 4)).to.be.equal('Incorrect index');
    });

    it("Should return Incorrect index when string length is less than index", () => {
        expect(lookupChar('abcd', 6)).to.be.equal('Incorrect index');
    });

    it("Should return Incorrect index when index is less than zero", () => {
        expect(lookupChar('abcd', -1)).to.be.equal('Incorrect index');
    });

    it("Should return b for index 1", () => {
        expect(lookupChar('abcd', 1)).to.be.equal('b');
    });

    it("Should return undefined for no parameters passed", () => {
        expect(lookupChar()).to.be.undefined;
    });

    it("Should return undefined for no index passed", () => {
        expect(lookupChar('abcd')).to.be.undefined;
    });

    it("Should return undefined for floating point index passed", () => {
        expect(lookupChar('abcd', 1.1)).to.be.undefined;
    });
});