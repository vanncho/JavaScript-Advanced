let solve = (function () {

    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }

    };

    return function(inputString) {

        let inputTokens = inputString.split(' ');
        let command = inputTokens[0];

        if (command === 'restock') {

            robot[inputTokens[1]] += Number(inputTokens[2]);
            return 'Success';

        } else if (command === 'prepare') {

            let currProduct = inputTokens[1];
            let currProductQuantity = Number(inputTokens[2]);
            let currProductStats = meals[currProduct];

            for (let currElement in currProductStats) {

                if (robot[currElement] < currProductStats[currElement] * currProductQuantity) {
                    return `Error: not enough ${currElement} in stock`;
                }
            }


                for (let currElement in currProductStats) {

                    robot[currElement] -= (currProductStats[currElement] * currProductQuantity);
                }

                return `Success`;

        } else if (command === 'report') {
            return `protein=${robot['protein']} carbohydrate=${robot['carbohydrate']} fat=${robot['fat']} flavour=${robot['flavour']}`;
            // console.log(`protein=${robot['protein']} carbohydrate=${robot['carbohydrate']} fat=${robot['fat']} flavour=${robot['flavour']}`);
        }
    }
})();

// solve('restock carbohydrate 10');
// solve('restock flavour 10');
// solve('prepare apple 1');
// solve('restock fat 10');
// solve('prepare burger 1');
// solve('report');

// solve('restock flavour 50');
solve('prepare coke 4');