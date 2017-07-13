function subsum(array, start, end) {

    let sum = 0;
    start = start < 0 ? 0 : start;
    end = end > array.length - 1 ? array.length - 1 : end;

    for (let i = start; i <= end; i++) {

        let currNum = array[i];
        if (typeof currNum !== 'number') {

            return NaN;
        }

        sum += array[i];
    }

    return sum;
}

// console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
// console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
// console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));