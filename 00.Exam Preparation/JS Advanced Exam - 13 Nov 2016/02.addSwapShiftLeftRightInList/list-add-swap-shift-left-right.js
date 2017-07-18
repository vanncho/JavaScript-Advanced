function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe("Add / Swap / Shift Left / Right in List Unit Tests", function() {

    let myList;
    beforeEach(function () {
        myList = createList();
    });

    it("Expect list to be empty", function () {
        expect(myList.toString()).to.be.equal('');
    });

    describe("Tests For Add in List", function () {

        it("Add one item, should list contains that item", function () {
            myList.add(5);
            expect(myList.toString()).to.be.equal('5');
        });

        it("Add two items, should list contains these items", function () {
            myList.add(5);
            myList.add(6);
            expect(myList.toString()).to.be.equal('5, 6');
        });
    });

    describe("Tests For ShiftLeft in List", function () {

        it("Should stay the same list", function () {
            myList.add(5);
            myList.shiftLeft();
            expect(myList.toString()).to.be.equal('5');
        });

        it("Should first element become the last", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.shiftLeft();
            expect(myList.toString()).to.be.equal('6, 7, 5');
        });
    });

    describe("Tests For ShiftRight in List", function () {

        it("Should stay the same list", function () {
            myList.add(5);
            myList.shiftRight();
            expect(myList.toString()).to.be.equal('5');
        });

        it("Should last element become the first", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.shiftRight();
            expect(myList.toString()).to.be.equal('7, 5, 6');
        });
    });

    describe("Tests For Swap in List", function () {

        it("Should return true for valid parameters", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(0, 2)).to.be.true;
        });

        it("Should return given list for swap true", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.swap(0, 2);
            expect(myList.toString()).to.be.equal('7, 6, 5');
        });

        it("Should return true for valid parameters", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(0, 1)).to.be.true;
        });

        it("Should return given list for swap true", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.swap(0, 1);
            expect(myList.toString()).to.be.equal('6, 5, 7');
        });

        it("Should return false if no parameters passed", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap()).to.be.false;
        });

        it("Should return false if one parameter is passed", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(1)).to.be.false;
        });

        it("Should return false if one of the parameters is not Integer", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(1, '1')).to.be.false;
        });

        it("Should return false if one of the parameters is not Integer", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.swap(1, '1');
            expect(myList.toString()).to.be.equal('5, 6, 7');
        });

        it("Should return false if both of the parameters are not Integer", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap('1', '1')).to.be.false;
        });

        it("Should return false if one of the parameters if floating point number", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(1.1, 2)).to.be.false;
        });

        it("Should return false if both of the parameters are floating point numbers", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(2.2, 0.5)).to.be.false;
        });

        it("Should return false if one of the parameters is negative number", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(-1, 0)).to.be.false;
        });

        it("Should return false if one of the parameters is negative number", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            myList.swap(-1, 0);
            expect(myList.toString()).to.be.equal('5, 6, 7');
        });

        it("Should return false if both of the parameters are negative numbers", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(-1, -2)).to.be.false;
        });

        it("Should return false if one of the parameters is greater than list size", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(3, 0)).to.be.false;
        });

        it("Should return false if both of the parameters are greater than list size", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(3, 5)).to.be.false;
        });

        it("Should return false if parameters are equal", function () {
            myList.add(5);
            myList.add(6);
            myList.add(7);
            expect(myList.swap(1, 1)).to.be.false;
        });
    });
});