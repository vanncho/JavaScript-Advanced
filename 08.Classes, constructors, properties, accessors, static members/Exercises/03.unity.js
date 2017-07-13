class Rat {
    constructor(name) {
        this.name = name;
        this.ratsArray = [];
    }

    unite(otherRat) {

        if (typeof otherRat === 'object') {
            this.ratsArray.push(otherRat);
        }
    }

    getRats() {
        return this.ratsArray;
    }

    toString() {
        let res = '';

        if (this.ratsArray.length === 0) {
            res += `${this.name}`;
            return res;
        } else {
            res += `${this.name}\n`;

            for (let i = 0; i < this.ratsArray.length; i++) {

                if (i < this.ratsArray.length) {
                    res += `##${this.ratsArray[i]}\n`;
                } else {
                    res += `##${this.ratsArray[i]}`;
                }
            }

            return res;
        }
    }
}

// let test = new Rat("Pesho");
// console.log(test.toString());
//
// console.log(test.getRats()); //[]
//
// test.unite(new Rat("Gosho"));
// test.unite(new Rat("Sasho"));
// console.log(test.getRats());
//
// console.log(test.toString());

let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
let rat4 = "fake rat";

console.log(typeof rat3);
// rat2.unite(rat4);
// console.log(rat2.getRats());