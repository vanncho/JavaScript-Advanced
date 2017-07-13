function result() {

    let typeOfAndOccurrences = {};

    for (let i = 0; i < arguments.length; i++) {

        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        if (!typeOfAndOccurrences[type]) {
            typeOfAndOccurrences[type] = 1;
        } else {
            typeOfAndOccurrences[type]++;
        }
    }

    let sortedTypes = [];
    for (let currentType in typeOfAndOccurrences) {
        sortedTypes.push([currentType, typeOfAndOccurrences[currentType]]);
    }

    sortedTypes.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let type of sortedTypes) {

        console.log(`${type[0]} = ${type[1]}`);
    }
}


result('cat', 'bat', 42, function () { console.log('Hello world!'); });