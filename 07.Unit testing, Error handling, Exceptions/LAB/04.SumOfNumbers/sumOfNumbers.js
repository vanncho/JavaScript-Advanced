function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

let expect = require('chai').expect;

describe("Sum Numbers Tests", () => {

    it("Should return 0 for []", () => {
        expect(sum([])).to.be.equal(0);
    });

    it("Should return 3 for [1, 2]", () => {
        expect(sum([1, 2])).to.be.equal(3);
    });

    it("Should return NaN for ['invalid data']", () => {
        expect(sum(['invalid data'])).to.be.NaN;
    })
});