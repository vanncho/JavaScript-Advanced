let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

describe("Shared Object Unit Tests", () => {

   describe("Initial value tests", () => {

       it("Test initial name value expect to be null", () => {
           expect(sharedObject.name).to.be.null;
       });

       it("Test initial income value expect to be null", () => {
           expect(sharedObject.income).to.be.null;
       })
   });

    describe("Change name tests", () => {

        it("With empty string, name should be null", () => {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it("With non-empty string, name should not be null", () => {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho');
        });

        describe("Name input tests", () => {

            it("With empty string, name should be passed string", () => {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Nakov');
            });

            it("With a non-empty string, name should be string", () => {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho', 'Name did not change correctly');
            });
        });
    });

    describe("Change income tests", () => {

        it("With empty string, should be null", () => {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });

        it("With a positive should be the same", () => {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });

        it("With number then floating-point to number", () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5);
        });

        it("With zero", () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });

        describe("Income input tests", () => {

            it("With string, should not change correctly", () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("With a positive number", () => {
                sharedObject.changeIncome(5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("With a floating-point number", () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(2.11);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("With a negative number", () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-2);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("With zero", () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
        })
    });

    describe("Update name tests", () => {

        it("With an empty string, should not change property", () => {
            sharedObject.changeName('Victor');
            let nameEl = $('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Victor');
        });

        it("With an non-empty string, should change property", () => {
            sharedObject.changeName('Victor');
            let nameEl = $('#name');
            nameEl.val('Ivan');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Ivan');
        });
    });

    describe("Update income tests", () => {

        it("With a string should not change income property", () => {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("With a floating-point should not change income property", () => {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('3.11');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("With a zero should not change income property", () => {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("With a negative should not change income property", () => {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("With a positive integer should change income property", () => {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
    });
});