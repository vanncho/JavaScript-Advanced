function getSortedList() {

    return {

        internalArray: [],
        size: 0,
        add: function (element) {
            this.internalArray.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {

            if (index >= 0 && index < this.internalArray.length) {
                this.internalArray.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {

            if (index >= 0 && index < this.internalArray.length) {
                return this.internalArray[index];
            }
        },
        toString: function () {
            return '[ ' + this.internalArray.join(', ') + ' ]';
        },
        sort: function () {
            this.internalArray = this.internalArray.sort((a,b) => a - b);
        }
    };
}

let sortedList = getSortedList();

sortedList.add(2);
sortedList.add(-1);
console.log(sortedList.toString());

sortedList.remove(0);
console.log(sortedList.toString());

console.log(sortedList.get(0));

console.log(sortedList.size);