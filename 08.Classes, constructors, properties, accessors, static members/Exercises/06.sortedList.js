class SortedList{

        constructor() {
            this.internalArray = [];
            this.size = 0;
        }


        add(element) {
            this.internalArray.push(element);
            this.size++;
            this.sort();
        }
        remove(index) {

            if (index >= 0 && index < this.internalArray.length) {
                this.internalArray.splice(index, 1);
                this.size--;
            }
        }
        get(index) {

            if (index >= 0 && index < this.internalArray.length) {
                return this.internalArray[index];
            }
        }
        toString() {
            return '[ ' + this.internalArray.join(', ') + ' ]';
        }
        sort() {
            this.internalArray = this.internalArray.sort((a,b) => a - b);
        }

        size() {
            return this.size;
        }
}

let sortedList = new SortedList();

sortedList.add(5);
sortedList.add(3);
console.log(sortedList.toString());

sortedList.remove(0);
console.log(sortedList.toString());
//
// console.log(sortedList.get(0));
//
console.log(sortedList.size);