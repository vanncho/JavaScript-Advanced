class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

let expect = require('chai').expect;

describe("Sumator Class Unit Tests", () => {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    it("Collection should has all functions in his prototype", () => {
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
        expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
    });

    it("Initial size must be zero", () => {
        expect(sumator.toString()).to.be.equal('(empty)');
    });

    describe("Tests for add function", () => {
        it("add 5 should be 5", () => {
            sumator.add(5);
            expect(sumator.toString()).to.be.equal('5');
        });

        it("add 5 and 6 should be 5 and 6", () => {
            sumator.add(5);
            sumator.add(6);
            expect(sumator.toString()).to.be.equal('5, 6');
        });

        it("add five should be five", () => {
            sumator.add('five');
            expect(sumator.toString()).to.be.equal('five');
        });

        it("add five and six should be five and six", () => {
            sumator.add('five');
            sumator.add('six');
            expect(sumator.toString()).to.be.equal('five, six');
        });

        it("add 5.5 and fix should be 5.5 and six", () => {
            sumator.add(5.5);
            sumator.add('six');
            expect(sumator.toString()).to.be.equal('5.5, six');
        });

        it("add object should object", () => {
            sumator.add({});
            expect(sumator.toString()).to.be.equal('[object Object]');
        });

        it("add function should function", () => {
            let f = function () {};
            sumator.add(f);
            expect(sumator.toString()).to.be.equal('function () {}');
        });
    });

    describe("Tests for sumNums function", () => {
        it("sum 5 and 5 should be 10", () => {
            sumator.add(5);
            sumator.add(5);
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(10);
        });

        it("sum 5.5 and 4.5 should be 10", () => {
            sumator.add(5.5);
            sumator.add(4.5);
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(10);
        });

        it("sum 7 and 0 should be 7", () => {
            sumator.add(7);
            sumator.add(0);
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(7);
        });

        it("sum 5 and five should be 5", () => {
            sumator.add(5);
            sumator.add('five');
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(5);
        });

        it("sum five and 5 should be 5", () => {
            sumator.add(5);
            sumator.add('five');
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(5);
        });

        it("sum five and five should be 0", () => {
            sumator.add('five');
            sumator.add('five');
            let sum = sumator.sumNums();
            expect(sum).to.be.equal(0);
        });
    });

    describe("Tests for removeByFilter function", () => {
        it("removeByFilter 5 and 6 should be 5", () => {
            sumator.add(5);
            sumator.add(6);

            let f = function (num) {
                return num > 5;
            };

            sumator.removeByFilter(f);
            expect(sumator.toString()).to.be.equal('5');
        });
    });
});