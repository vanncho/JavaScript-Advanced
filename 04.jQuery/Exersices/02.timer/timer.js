function timer() {

    $('#start-timer').on('click', startCounter);
    $('#stop-timer').on('click', stopCounter);
    let secondsCount = 1;
    let minutesCount = 0;
    let hoursCount = 0;
    let interval;
    let isStarted = false;

    function startCounter() {

        if (!isStarted) {
            interval = setInterval(count, 1000);
            isStarted = true;
        }
    }

    function stopCounter() {
        clearInterval(interval);
        isStarted = false;
    }

    function count() {

        $('#seconds').text(('0' + `${secondsCount}`).slice(-2));
        $('#minutes').text(('0' + `${minutesCount}`).slice(-2));
        $('#hours').text(('0' + `${hoursCount}`).slice(-2));
        secondsCount++;

        if (secondsCount === 60) {
            minutesCount++;
        }

        if (minutesCount === 60) {
            hoursCount++;
        }

        secondsCount = secondsCount % 60;
        minutesCount = minutesCount % 60;
        hoursCount = hoursCount % 24;
    }
}