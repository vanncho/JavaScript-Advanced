//Require the data
let data = require('./data');

function sort(property) {
    //TODO sort and return data

    data.sort(function (a, b) {

        return a[property].localeCompare(b[property]);
    });

    return data;
}

function filter(property, value) {

    return data.filter((a, b) => a[property] === value);
}

result.sort = sort;
result.filter = filter;