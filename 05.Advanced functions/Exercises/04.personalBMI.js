function solve(name, age, weight, height) {

    let bmi = Math.round(weight / Math.pow(height / 100, 2));

    let outerObj = {};

    outerObj.name = name;

    let personalInfo = {};
    personalInfo.age = age;
    personalInfo.weight = weight;
    personalInfo.height = height;

    outerObj.personalInfo = personalInfo;
    outerObj.BMI = bmi;

    let status = getStatus();

    function getStatus() {

        let st = '';
        if (bmi < 18.5) {
            st = 'underweight';
        } else if (bmi < 25 && bmi >= 18.5) {
            st = 'normal';
        } else if (bmi < 30 && bmi >= 25) {
            st = 'overweight';
        } else {
            st = 'obese';
        }

        return st;
    }

    outerObj.status = status;

    if (status === 'obese') {
        outerObj.recommendation = 'admission required';
    }

    return outerObj;
}

console.log(solve("Peter", 29, 75, 182));