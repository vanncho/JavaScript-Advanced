function attachEventsListeners() {

    document.getElementById('convert').addEventListener('click', convert);

    function convert() {

        let input = document.getElementById('inputDistance').value;
        let inputSelect = document.getElementById('inputUnits');

        let selectFrom = inputSelect.options[inputSelect.selectedIndex].value;

        let outputSelect = document.getElementById('outputUnits');
        let selectTo = outputSelect.options[outputSelect.selectedIndex].value;

        let multiply = 0;
        let divide = 0;

        if (selectFrom === 'km') {

            switch (selectTo) {
                case 'km': multiply = 1; break;
                case 'm': multiply = 1000; break;
                case 'cm': multiply = 100000; break;
                case 'mm': multiply = 1000000; break;
                case 'mi': multiply = 0.6214; break;
                case 'yrd': multiply = 1093.6133; break;
                case 'ft': multiply = 3280.8399; break;
                case 'in': multiply = 39370.0787; break;
            }
        }

        if (selectFrom === 'm') {

            switch (selectTo) {
                case 'km': multiply = 0.001; break;
                case 'm': multiply = 1; break;
                case 'cm': multiply = 100; break;
                case 'mm': multiply = 1000; break;
                case 'mi': multiply = 0.00062137; break;
                case 'yrd': multiply = 1.0936133; break;
                case 'ft': multiply = 3.2808399; break;
                case 'in': multiply = 39.3700787; break;
            }
        }

        if (selectFrom === 'cm') {

            switch (selectTo) {
                case 'km': multiply = 0.00001; break;
                case 'm': multiply = 0.01; break;
                case 'cm': multiply = 1; break;
                case 'mm': multiply = 10; break;
                case 'mi': multiply = 0.0000062137; break;
                case 'yrd': multiply = 0.010936133; break;
                case 'ft': multiply = 0.032808399; break;
                case 'in': multiply = 0.393700787; break;
            }
        }

        if (selectFrom === 'mm') {

            switch (selectTo) {
                case 'km': multiply = 0.000001; break;
                case 'm': multiply = 0.001; break;
                case 'cm': multiply = 0.1; break;
                case 'mm': multiply = 1; break;
                case 'mi': multiply = 0.000000621371; break;
                case 'yrd': multiply = 0.00109361; break;
                case 'ft': multiply = 0.00328084; break;
                case 'in': multiply = 0.0393701; break;
            }
        }

        if (selectFrom === 'mi') {

            switch (selectTo) {
                case 'km': multiply = 1.609344; break;
                case 'm': multiply = 1609.344; break;
                case 'cm': multiply = 160934.4; break;
                case 'mm': multiply = 1609344; break;
                case 'mi': multiply = 1; break;
                case 'yrd': multiply = 1760; break;
                case 'ft': multiply = 5280; break;
                case 'in': multiply = 63360; break;
            }
        }

        if (selectFrom === 'yrd') {

            switch (selectTo) {
                case 'km': multiply = 0.0009144; break;
                case 'm': multiply = 0.9144; break;
                case 'cm': multiply = 91.44; break;
                case 'mm': multiply = 914.4; break;
                case 'mi': multiply = 0.000568182; break;
                case 'yrd': multiply = 1; break;
                case 'ft': multiply = 3; break;
                case 'in': multiply = 36; break;
            }
        }

        if (selectFrom === 'ft') {

            switch (selectTo) {
                case 'km': multiply = 0.0003048; break;
                case 'm': multiply = 0.3048; break;
                case 'cm': multiply = 30.48; break;
                case 'mm': multiply = 304.8; break;
                case 'mi': multiply = 0.000189394; break;
                case 'yrd': multiply = 0.333333; break;
                case 'ft': multiply = 1; break;
                case 'in': multiply = 12; break;
            }
        }

        if (selectFrom === 'in') {

            switch (selectTo) {
                case 'km': multiply = 0.0000254; break;
                case 'm': multiply = 0.0254; break;
                case 'cm': multiply = 2.54; break;
                case 'mm': multiply = 25.4; break;
                case 'mi': multiply = 0.0000157828; break;
                case 'yrd': multiply = 0.0277778; break;
                case 'ft': multiply = 0.0833333; break;
                case 'in': multiply = 1; break;
            }
        }

        document.getElementById('outputDistance').value = input * multiply;
    }
}