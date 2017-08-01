class Task {
    constructor(title, deadline) {
        this.title = title;
        this.status = 'Open';
        this.isOverdue = false;
        this.deadline = deadline;
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {

        let today = Date.now();

        if (this.status !== 'Complete') {
            this.isOverdue = true;
        }

        if (value < today) {
            this.isOverdue = true;
            throw new Error('Date is in the past');
        }

        this._deadline = value;
    }


    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    static comparator(a, b) {

        let statusA = a.status;
        let statusB = b.status;
        let overdueA = a.isOverdue;
        let overdueB = b.isOverdue;

        // let power = new Map();
        // power.set('Open', "\u2731");
        // power.set('In Progress', "\u219D ");
        // power.set('Complete', "\u2714");
        // power.set('Overdue', "\u26A0");

        if (overdueA === true && statusA !== 'Complete') {
            return 1;
        } else if (overdueA === true && statusA === 'Complete') {
            return -1;
        } else if (statusA === 'In Progress' && statusB === 'Open') {
            return 1;
        } else if (statusA === 'In Progress' && statusB === 'Complete') {
            return 1;
        } else if (statusA === 'In Progress' && statusB === 'Open') {
            return 1;
        }
        else if (statusA === 'Open' && statusB === 'Complete') {
            return 1;
        } else {
            return 0;
        }
    }

    toString() {
        let statusIcons = new Map();
        statusIcons.set('Open', "\u2731");
        statusIcons.set('In Progress', "\u219D");
        statusIcons.set('Complete', "\u2714");
        statusIcons.set('Overdue', "\u26A0");

        let today = Date.now();
        if (this.deadline < today) {
            this.isOverdue = true;
        } else {
            this.isOverdue = false;
        }

        if (this.isOverdue && this.status !== 'Complete') {
            return `[${statusIcons.get('Overdue')}] ${this.title} {(overdue)}`;
        } else {
            return `[${statusIcons.get(this.status)}] ${this.title} {(deadline: ${this.deadline})}`;
        }

    }
}
//
// let date1 = new Date();
// date1.setDate(date1.getDate() + 7); // Set date 7 days from now
// let task1 = new Task('JS Homework', date1);
// let date2 = new Date();
// date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
// let task2 = new Task('Start career', date2);
// console.log(task1 + '\n' + task2);
//
// console.log();
// let date3 = new Date();
// date3.setDate(date3.getDate() + 3); // Set date 3 days from now
// let task3 = new Task('football', date3);
// // Create two tasks with deadline set to current time
// let task4 = new Task('Task 4', new Date());
// let task5 = new Task('Task 5', new Date());
// task1.status = 'In Progress';
// task3.status = 'In Progress';
// task5.status = "Complete";
// let tasks = [task1, task2, task3, task4, task5];
// setTimeout(() => {
//     tasks.sort(Task.comparator);
//     console.log(tasks.join('\n'));
// }, 1000); // Sort and print one second later

let dateInTheFuture = new Date();
dateInTheFuture.setDate(60);
let task = new Task('New Task', dateInTheFuture);

// let dateWayAhead = new Date();
// dateWayAhead.setDate(90);
// console.log(task.isOverdue);

console.log(task.status);
console.log(task.toString());