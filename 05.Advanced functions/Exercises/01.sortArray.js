function solve(array, sortType) {

    let ascComparator = function (a, b) {
        return a - b;
    };

    let descComparator = function (a, b) {
        return b - a;
    };

    let sortStrategy = {

        'asc': ascComparator,
        'desc': descComparator
    };

    return array.sort(sortStrategy[sortType]);
}


// solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');