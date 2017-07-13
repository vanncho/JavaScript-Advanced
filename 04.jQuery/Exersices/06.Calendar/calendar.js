function calendar(arrayOfNumbers) {

    let divContent = $('#content');

    let day = arrayOfNumbers[0];
    let month = arrayOfNumbers[1] - 1;
    let monthName = getMonthName(month);
    let year = arrayOfNumbers[2];

    let date = new Date(year, month, day);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let c = firstDay.getDate();

    divContent
        .append($('<table></table>')
            .append($(`<caption>${monthName} ${year}</caption>`))
            .append($('<tbody id="table-body"></tbody>'))
            .append($('<tr></tr>')
                .append($('<th>Mon</th>'))
                .append($('<th>Tue</th>'))
                .append($('<th>Wed</th>'))
                .append($('<th>Thu</th>'))
                .append($('<th>Fri</th>'))
                .append($('<th>Sat</th>'))
                .append($('<th>Sun</th>')))
            .append($('<tr id="weekOne"></tr>'))
            .append($('<tr id="weekTwo"></tr>'))
            .append($('<tr id="weekThree"></tr>'))
            .append($('<tr id="weekFour"></tr>'))
            .append($('<tr id="weekFive"></tr>')));

    weekOneFill();
    weekTwoFill();
    weekThreeFill();
    weekFourFill();
    weekFiveFill();
    weekSixFill();

    function weekOneFill() {

        let arr = [7, 1, 2, 3, 4, 5, 6];
        let start = arr[firstDay.getDay()];

        let trWeekOne = $('#weekOne');
        let count = 0;

        for (let i = 0; i < start - 1; i++) {

            trWeekOne
                .append($('<td></td>'));
            count++;
        }

        for (let i = 0; i < 7 - count; i++) {

            if (c !== day) {
                trWeekOne
                    .append($(`<td>${c}</td>`));
            } else {
                trWeekOne
                    .append($(`<td class="today">${c}</td>`));
            }
            c++;
        }
    }

    function weekTwoFill() {

        let trWeekTwo = $('#weekTwo');

        for (let i = 0; i < 7; i++) {

            if (c !== day) {
                trWeekTwo
                    .append($(`<td>${c}</td>`));
            } else {
                trWeekTwo
                    .append($(`<td class="today">${c}</td>`));
            }
            c++;
        }
    }

    function weekThreeFill() {

        let trWeekThree = $('#weekThree');

        for (let i = 0; i < 7; i++) {

            if (c !== day) {
                trWeekThree
                    .append($(`<td>${c}</td>`));
            } else {
                trWeekThree
                    .append($(`<td class="today">${c}</td>`));
            }
            c++;
        }
    }

    function weekFourFill() {

        let trWeekFour = $('#weekFour');

        for (let i = 0; i < 7; i++) {

            if (c !== day) {
                trWeekFour
                    .append($(`<td>${c}</td>`));
            } else {
                trWeekFour
                    .append($(`<td class="today">${c}</td>`));
            }
            c++;
        }
    }

    function weekFiveFill() {

        let trWeekFive = $('#weekFive');
        let b = c;

        for (let i = 0; i < 7; i++) {

            if (c !== day) {
                trWeekFive
                    .append($(`<td>${c}</td>`));
            } else {
                trWeekFive
                    .append($(`<td class="today">${c}</td>`));
            }

            if (b === lastDay.getDate()) {
                c = '';
            } else {
                c++;
                b = c;
            }
        }
    }

    function weekSixFill() {

        if (c !== '') {

            let tbody = $('#table-body');
            let tr = $('<tr id="weekSix"></tr>');

            let b = c;

            for (let i = 0; i < 7; i++) {

                if (c !== day) {
                    tr
                        .append($(`<td>${c}</td>`));
                } else {
                    tr
                        .append($(`<td class="today">${c}</td>`));
                }

                if (b === lastDay.getDate()) {
                    c = '';
                } else {
                    c++;
                    b = c;
                }
            }

            tbody.append(tr);
        }
    }

    function getMonthName(month) {

        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return monthNames[month];
    }
}