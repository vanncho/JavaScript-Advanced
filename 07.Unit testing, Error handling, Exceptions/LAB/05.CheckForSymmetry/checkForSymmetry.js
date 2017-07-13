function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect;

describe("Tests For Symmetry", () => {

    it("Should return true for [1,2,3,3,2,1]", () => {
        expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
    });

    it("Should return true for [-1,2,-1]]", () => {
        expect(isSymmetric([-1,2,-1])).to.be.true;
    });

    it("Should return false for [1,2]", () => {
        expect(isSymmetric([1,2])).to.be.false;
    });

    it("Should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", () => {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
    });

    it("Should return false for 1,2,2,1", () => {
        expect(isSymmetric(1,2,2,1)).to.be.false;
    });
});