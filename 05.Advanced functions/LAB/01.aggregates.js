function solve(array) {

    function reducer(array, func) {

        let result = array[0];

        for (let elem of array.slice(1)) {

            result = func(result, elem);
        }

        return result;
    }

    console.log('Sum = ' + reducer(array, (a, b) => a + b));
    console.log('Min = ' + reducer(array, (a, b) => Math.min(a, b)));
    console.log('Max = ' + reducer(array, (a, b) => Math.max(a, b)));
    console.log('Product = ' + reducer(array, (a, b) => a * b));
    console.log('Join = ' + reducer(array, (a, b) => '' + a + b));
}

solve([1, 2, 3]);