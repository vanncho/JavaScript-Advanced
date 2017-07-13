let result = (function () {

    return {

        add: function (vec1, vec2) {

            let arr = [];
            arr.push(vec1[0] + vec2[0]);
            arr.push(vec1[1] + vec2[1]);
            return arr;
        },

        multiply: function (vec1, digit) {

            let arr = [];
            arr.push(vec1[0] * digit);
            arr.push(vec1[1] * digit);
            return arr;
        },

        length: function (vec1) {
            
            let x = vec1[0];
            let y = vec1[1];

            return Math.sqrt((x * x) + (y * y));
        },
        
        dot: function (vec1, vec2) {

            return (vec1[0] * vec2[0]) + (vec1[1] * vec2[1]);
        },

        cross: function (vec1, vec2) {

            return (vec1[0] * vec2[1]) - (vec1[1] * vec2[0]);
        }
    }
})();

// solution.add([1, 1], [1, 0]);
// console.log(solve([1, 1], 2).multiply);
// console.log(solve([1, 0], [0, -1]).dot);

 // let res = result.add([1, 1], [1, 0]);
let res = result.length([3, -4]);
console.log(res);

