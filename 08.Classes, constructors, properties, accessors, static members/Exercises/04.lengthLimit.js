class Stringer {
    constructor(str, length) {
        this.str = str;
        this.length = length;
    }

    get innerString() {
        return this.str;
    }

    get innerLength() {
        return this.length;
    }

    increase(length) {
        this.length = this.length + length;
    }

    decrease(length) {

        if (this.length - length < 0) {
            this.length = 0;
        } else {
            this.length = this.length - length;
        }
    }

    toString() {

        if (this.length === 0) {
            return '...';

        } else if (this.str.length > this.length) {
            return `${this.str.substring(0, this.length)}...`;
        } else {
            return `${this.str}`;
        }
    }
}

let test = new Stringer("Test", 5);
// console.log(test.toString()); //Test

// test.decrease(3);
// console.log(test.toString()); //Te...

test.increase(4);
console.log(test.toString()); //Test