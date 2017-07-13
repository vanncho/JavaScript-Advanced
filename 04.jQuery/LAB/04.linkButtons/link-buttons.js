function attachEvents() {

    $('a.button').on('click', linkClicked);

    function linkClicked() {
        $('a.button').removeClass('selected');
        $(this).addClass('selected');
    }
}