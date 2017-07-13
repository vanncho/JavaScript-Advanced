function solve(n) {

    let fib = (function solution() {

        let fib1 = 0;
        let fib2 = 1;

        return function fib() {

            let fib3 = fib1 + fib2;
            [fib1, fib2] = [fib2, fib3];
            console.log(fib1);
        }
    })();

    let arr = [];
    for (let i = 0; i < n; i++) {
        fib();
    }

    return arr;
}

solve(5);