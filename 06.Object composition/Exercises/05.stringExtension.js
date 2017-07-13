(function solve() {

    String.prototype.ensureStart = function (str) {

        let curr = this.toString().substring(0, str.length);

        if (curr !== str) {
            return str + this.toString();
        } else {
            return this.toString();
        }
    };

    String.prototype.ensureEnd = function (str) {

        let curr = this.toString().substring(this.toString().length - str.length);

        if (curr !== str) {
            return this + str;
        } else {
            return this.toString();
        }
    };

    String.prototype.isEmpty = function () {

        return this.length === 0;
    };

    String.prototype.truncate = function (num) {

        if (this.length <= num) {
            return this.toString();
        } else {
            let s = this.toString().substring(0, num).trim();
            let str;

            let lastSpace = s.toString().lastIndexOf(' ');
            if (lastSpace >= 0) {
                str = this.toString().substring(0, lastSpace);
                return str + '...';
            } else {

                if (num > s.length) {
                    str = this.toString().substring(0, s.length - 3);
                    return str + '...';
                } else {
                    return '.'.repeat(num);
                }
            }
        }
    };

    String.format = function () {

        let strToFormat = arguments[0];

        for (let i = 1; i < arguments.length; i++) {

            if (arguments[i] !== undefined) {
                let ind = strToFormat.indexOf('{');

                if (ind >= 0) {
                    strToFormat = strToFormat.substring(0, ind) + arguments[i] + strToFormat.substring(ind + 3);
                }
            }
        }

        return strToFormat;
    };

})();

let s = 'the quick brown fox jumps over the lazy dog';
console.log(s.truncate(43));
console.log(s.length);