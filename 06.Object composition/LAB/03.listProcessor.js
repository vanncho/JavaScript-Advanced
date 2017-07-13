function solve(array) {

    let process = (function () {

        let arr = [];

        return {
            add: function (text) {
                arr.push(text);
            },
            remove: function (text) {
                arr = arr.filter(x => x !== text);
            },
            print: function () {
                console.log(arr.join(','));
            }
        };
    })();

    for (let i = 0; i < array.length; i++) {
        let currItems = array[i].split(' ');

        switch (currItems[0]) {
            case "add":
                process.add(currItems[1]);
                break;
            case "remove":
                process.remove(currItems[1]);
                break;
            case "print":
                process.print();
                break;
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);