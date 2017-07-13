function solve() {

    class Melon {

        constructor(weight, melonSort) {

            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.n = this.constructor.name;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.n.substring(0, this.n.length - 5)}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Watermelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }
    }

    class Firemelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }
    }

    class Earthmelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }
    }

    class Airmelon extends Melon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.weight * this.melonSort.length;
        }
    }

    class Melolemonmelon extends Watermelon {

        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.arr = ['Water', 'Fire', 'Earth', 'Air'];
            this.element = 'Water';
        }

        morph() {
            this.arr.push(this.arr.shift());
            this.element = this.arr[0];
            return this;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
}

let classes = solve();

// let test = new classes.Watermelon(5, 'Rotten');
// console.log(test.toString());

let test = new classes.Melolemonmelon(150, "Melo");
console.log(test.toString());
console.log();
test.morph();

console.log(test.toString());