function solve(carObject) {

    let engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    let carriage = {
        hatchback: { type: 'hatchback', color: '' },
            coupe: { type: 'coupe', color: '' }
    };

    let wheels = getWheels(carObject.wheelsize);
    let myCarCarriage = carriage[carObject.carriage];
    myCarCarriage.color = carObject.color;

    function getWheels(wheelsize) {
        let arr = [];
        let ws = Math.floor(wheelsize);
        ws = ws % 2 === 0 ? ws - 1 : ws;
        for (let i = 0; i < 4; i++) {
            arr.push(ws);
        }
        return arr;
    }

    let myCar = Object.create(carObject);

    let smallDiff = Math.abs(carObject.power - engine.small.power);
    let normalDiff = Math.abs(carObject.power - engine.normal.power);
    let monsterDiff = Math.abs(carObject.power - engine.monster.power);

    if (smallDiff < normalDiff && smallDiff < monsterDiff) {
        myCar.engine = engine.small;
    } else if (normalDiff < smallDiff && normalDiff < monsterDiff) {
        myCar.engine = engine.normal;
    } else if (monsterDiff < smallDiff && monsterDiff < normalDiff) {
        myCar.engine = engine.monster;
    }

    myCar.carriage = myCarCarriage;
    myCar.wheels = wheels;

    // myCar.toString = function () {
    //   return `{ model: '${this.model}', engine: { power: ${this.engine.power}, volume: ${this.engine.volume} }, carriage: { type: ${this.carriage.type}, color: ${this.carriage.color} }, wheels: ${this.wheels} }`;
    // };

    return myCar;
}

// console.log(solve({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));