class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

let expect = require('chai').expect;

describe("Sorted List Unit Tests", () => {

    let list;
    beforeEach(function () {
        list = new SortedList();
    });

    it("Collection should has all functions in his prototype", () => {
       expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
       expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
       expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
       expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.true;
       expect(SortedList.prototype.hasOwnProperty('sort')).to.be.true;
    });

    it("should have size property getter", function() {
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
        expect(typeof list.size).to.not.equal('function');
    });

    it("Initial list size must be zero", () => {
        expect(list.size).to.be.equal(0);
    });

    describe("Tests for add function", () => {

        it ("Add one element, should collection has one element", () => {
            list.add(6);
            expect(list.size).to.be.equal(1);
        });

        it ("Add one element, should collection has added element ot 0 position", () => {
            list.add(6);
            expect(list.get(0)).to.be.equal(6);
        });

        it ("Add three elements should collection be sorted", () => {
            list.add(6);
            list.add(4);
            list.add(2);
            expect(list.get(0)).to.be.equal(2);
            expect(list.get(1)).to.be.equal(4);
            expect(list.get(2)).to.be.equal(6);
        });

        it ("Add three elements should collection has size 3", () => {
            list.add(6);
            list.add(4);
            list.add(2);
            expect(list.size).to.be.equal(3);
        });
    });

    describe("Tests for remove function", () => {

        it ("Remove non existing element in collection, should throw Error", () => {
            let fun = function () {
                list.remove(1)
            };
            expect(fun).to.throw(Error);
        });

        it ("Remove element with negative index, should throw Error", () => {
            list.add(1);
            let fun = function () {
                list.remove(-1)
            };
            expect(fun).to.throw(Error);
        });

        it ("Remove element with index greater than collection size, should throw Error", () => {
            list.add(1);
            list.add(2);
            let fun = function () {
                list.remove(2)
            };
            expect(fun).to.throw(Error);
        });

        it ("Remove element in collection with 2 elements, should have 1 at 0 position", () => {
            list.add(1);
            list.add(2);
            list.remove(1);
            expect(list.get(0)).to.be.equal(1);
        });

        it ("Remove element in collection with 2 elements, should have size 1", () => {
            list.add(1);
            list.add(2);
            list.remove(1);
            expect(list.size).to.be.equal(1);
        });
    });

    describe("Tests for get function", () => {

        it ("Get element at position 1 of empty collection, should throw Error", () => {
            let fun = function () {
                list.get(1)
            };
            expect(fun).to.throw(Error);
        });

        it ("Get element with negative index, should throw Error", () => {
            list.add(1);
            list.add(2);
            let fun = function () {
                list.get(-1)
            };
            expect(fun).to.throw(Error);
        });

        it ("Get element with index greater than collection size, should throw Error", () => {
            list.add(1);
            list.add(2);
            let fun = function () {
                list.get(5)
            };
            expect(fun).to.throw(Error);
        });
    });
});