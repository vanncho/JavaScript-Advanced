function attachEventsListeners() {

    document
        .getElementById('daysBtn')
        .addEventListener('click', dayClick);
    document
        .getElementById('hoursBtn')
        .addEventListener('click', hourClick);
    document
        .getElementById('minutesBtn')
        .addEventListener('click', minuteClick);
    document
        .getElementById('secondsBtn')
        .addEventListener('click', secondsClick);

    function dayClick() {
        let dayInput = document.getElementById('days').value;

        if (dayInput.length > 0) {
            document.getElementById('hours').value = dayInput * 24;
            document.getElementById('minutes').value = dayInput * 1440;
            document.getElementById('seconds').value = dayInput * 86400;
        }
    }

    function hourClick() {
        let hourInput = document.getElementById('hours').value;

        if (hourInput.length > 0) {
            document.getElementById('days').value = hourInput / 24;
            document.getElementById('minutes').value = hourInput * 60;
            document.getElementById('seconds').value = hourInput * 3600;
        }
    }
    
    function minuteClick() {
        let minuteInput = document.getElementById('minutes').value;

        if (minuteInput.length > 0) {
            document.getElementById('hours').value = minuteInput / 60;
            document.getElementById('days').value = minuteInput / 1440;
            document.getElementById('seconds').value = minuteInput * 60;
        }
    }
    
    function secondsClick() {
        let secondInput = document.getElementById('seconds').value;

        if (secondInput.length > 0) {
            document.getElementById('days').value = secondInput / 86400;
            document.getElementById('hours').value = secondInput / 3600;
            document.getElementById('minutes').value = secondInput / 60;
        }
    }
}