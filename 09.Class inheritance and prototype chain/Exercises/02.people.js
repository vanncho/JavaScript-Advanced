function solve() {

    class Employee {

        constructor(name, age) {

            if (this.constructor === Employee) {
                throw new TypeError('Abstract class can not be instantiated.');
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currTask = this.tasks.shift();
            console.log(this.name + currTask);
            this.tasks.push(currTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {

        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

let result = solve();

let guy1 = new result.Junior('pesho', 20);
let guy2 = new result.Senior('gosho', 21);
let guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('salary'));
console.log(guy2.hasOwnProperty('salary'));
console.log(guy3.hasOwnProperty('salary'));
console.log(guy3.hasOwnProperty('dividend'));