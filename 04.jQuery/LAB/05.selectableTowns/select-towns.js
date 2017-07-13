function attachEvents() {

    $('ul li').on('click', clickOnTown);

    function clickOnTown() {

        if (!$(this).attr('data-selected')) {
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD');
        } else {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        }
    }

    $('#showTownsButton').on('click', showSelectedTowns);

    function showSelectedTowns() {

        let towns = $('#items li[data-selected=true]');
        $('#selectedTowns').text('Selected towns: ' + towns.toArray().map(x => x.textContent).join(', '));
    }
}