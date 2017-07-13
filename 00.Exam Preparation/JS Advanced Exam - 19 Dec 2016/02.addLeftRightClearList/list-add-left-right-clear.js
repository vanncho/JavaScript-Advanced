function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe("Add Left Right Tests", () => {

    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });

    it("When add element at left should be the same element", () => {
        myList.addLeft(5);
        expect(myList.toString()).to.be.equal('5');
    });

    it("When add no element at left should be empty list", () => {
        myList.addLeft();
        expect(myList.toString()).to.be.equal('');
    });

    it("When add element at right should be the same element", () => {
        myList.addRight(5);
        expect(myList.toString()).to.be.equal('5');
    });

    it("When add no element at right should be empty list", () => {
        myList.addRight();
        expect(myList.toString()).to.be.equal('');
    });

    it("When clear list should be empty", () => {
        myList.addLeft(5);
        myList.addLeft(6);
        myList.addRight(7);
        myList.clear();
        expect(myList.toString()).to.be.equal('');
    });

    it("When add three elements should have three elements", () => {
        myList.addLeft(5);
        myList.addLeft(6);
        myList.addRight(7);
        expect(myList.toString()).to.be.equal('6, 5, 7');
    });
});