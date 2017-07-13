function solve(workerObject) {

    if (workerObject.handsShaking === true) {

        let tempCalc = workerObject.weight * 0.1 * workerObject.experience;
        workerObject['bloodAlcoholLevel']+= tempCalc;
        workerObject['handsShaking'] = false;
    }

    return workerObject;
}

console.log(solve({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));