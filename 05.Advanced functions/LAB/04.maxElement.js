function solve(array) {
    return Math.max.apply([], array);
}

let arr = [10, 20, 5];

console.log(solve(arr));