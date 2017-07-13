function solve(strArray, sortCriteria) {

    class Ticket {
        constructor(dest, price, status) {
            this.destination = dest;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArray = [];

    for (let i = 0; i < strArray.length; i++) {
        let [destinationName, price, status] = strArray[i].split('|');

        let currTicket = new Ticket(destinationName, Number(price), status);
        ticketsArray.push(currTicket);
    }

    ticketsArray.sort(function (a, b) {

        let aType = a[sortCriteria];
        let bType = b[sortCriteria];

        if (typeof aType === 'string') {
            return aType.localeCompare(bType);
        } else {
            return aType - bType;
        }
    });

    return ticketsArray;
}

// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));