function getList(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe("Add / Delete in list Tests", function() {

    let testList;
    beforeEach(() => {
        testList = getList();
    });

    it("Test empty list should be empty", function () {
        expect(testList.toString()).to.be.equal('');
    });

    describe("Add tests", function () {

        it("Add integer should be added successful", function() {
            testList.add(5);
            expect(testList.toString()).to.be.equal("5");
        });


        it("Add string should be added successful", function() {
            testList.add("5.1");
            expect(testList.toString()).to.be.equal("5.1");
        });
    });

    describe("Remove tests", function () {

        it("Remove with valid index should remove successful", function() {
            testList.add(5);
            testList.add(4);
            testList.add(3);
            let res = testList.delete(1);
            expect(res).to.be.equal(4);
        });

        it("Remove with valid index should return correct array", function() {
            testList.add(5);
            testList.add(4);
            testList.add(3);
            testList.delete(0);
            expect(testList.toString()).to.be.equal("4, 3");
        });

        it("Remove with floating-point index should return undefined", function() {
            testList.add(5);
            testList.add(4);
            testList.add(3);
            let res = testList.delete(1.11212);
            expect(res).to.be.undefined;
        });

        it("Remove with floating-point index should not removed", function() {
            testList.add(3);
            let res = testList.delete(3.12);
            expect(testList.toString()).to.be.equal('3');
        });

        it("Remove with negative index should return undefined", function() {
            testList.add(5);
            testList.add(4);
            testList.add(3);
            let res = testList.delete(-1);
            expect(res).to.be.undefined;
        });

        it("Remove with index bigger than list length should return undefined", function() {
            testList.add(5);
            testList.add(4);
            testList.add(3);
            let res = testList.delete(5);
            expect(res).to.be.undefined;
        });

        it("Remove with string as index should return undefined", function() {
            testList.add(5);
            testList.add(4);
            testList.add(3);
            let res = testList.delete('5');
            expect(res).to.be.undefined;
        });
    });
});