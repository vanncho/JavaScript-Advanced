function solve(input) {

    let car = (function () {

        let map = new Map();

        return {

            create: function (name) {
                map.set(name, {});
            },
            inherit: function (name, parentName) {
                map.set(name, Object.create(map.get(parentName)));
            },
            set: function (name, key, value) {
                map.get(name)[key] = value;
            },
            print: function (name) {
                let curr = map.get(name);
                let props = [];

                for (let obj in curr) {
                    props.push(`${obj}:${curr[obj]}`);
                }

                console.log(props.join(', '));
            }
        }
    })();

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' ');
        switch (tokens[0]) {

            case 'create':

                if (tokens.length === 2) {
                    car.create(tokens[1]);
                } else {
                    car.inherit(tokens[1], tokens[3]);
                }
                break;
            case 'set':
                car.set(tokens[1], tokens[2], tokens[3]);
                break;
            case 'print':
                car.print(tokens[1]);
                break;
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);