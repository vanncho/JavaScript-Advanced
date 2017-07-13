function solve(num1, num2) {

    return solve(num1, num2);

    function solve(num1, num2) {
        if (num2 === 0) {
            return num1;
        } else {
            return solve(num2, num1 % num2)
        }
    }
}

console.log(solve(252, 105));