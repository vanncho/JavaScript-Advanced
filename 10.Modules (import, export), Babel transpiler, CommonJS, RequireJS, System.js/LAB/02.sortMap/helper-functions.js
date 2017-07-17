function mapSort(map, sortFn) {

    let newMap = new Map();

    if (sortFn !== undefined) {

        newMap = new Map(Array.from(map).sort(sortFn));
    } else {
        newMap = new Map(Array.from(map).sort((a,b) => {

            let one = a[0];
            let two = b[0];

            if (typeof one === 'string') {
                return a[0].localeCompare(b[0]);
            } else {
                return a[0] - b[0];
            }
        }));
    }

    return newMap;
}

module.exports = mapSort;