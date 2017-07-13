function solve(strArray) {

    let str = '';

    (function processor() {

        for (let i = 0; i < strArray.length; i++) {

            let tokens = strArray[i].split(' ');

            switch (tokens[0]) {

                case 'append':
                    str += tokens[1];
                    break;
                case 'removeStart':
                    str = str.substring(Number(tokens[1]));
                    break;
                case 'removeEnd':
                    str = str.substring(0, str.length - Number(tokens[1]));
                    break;
                case 'print':
                    console.log(str);
                    break;
            }
        }
    })();
}

// let arr = ['append hello',
//            'append again',
//            'removeStart 3',
//            'removeEnd 4',
//            'print'];

let arr = ['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print'];

console.log(solve(arr));