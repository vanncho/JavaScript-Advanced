function initializeTable() {

    let table = $('#countriesTable');
    $('#createLink').on('click', getInputData);
    let countries = ['Bulgaria', 'Germany', 'Russia'];
    let capitals = ['Sofia', 'Berlin', 'Moscow'];

    for (let i = 0; i < 3; i++) {
        addNewRow(table, countries[i], capitals[i]);
    }

    checkForTheLast();

    function getInputData() {

        let countryName = $('#newCountryText').val();
        let capitalName = $('#newCapitalText').val();

        if (countryName.length > 0 && capitalName.length > 0) {

            fillData(countryName, capitalName);
        }
    }

    function fillData(countryName, capitalName) {

        addNewRow(table, countryName, capitalName);

        $('table tr:nth-child(3) a:first-child').css('display', 'none');
    }

    function addNewRow(table, countryName, capitalName) {

        $('table tr:nth-child(3) a:first-child').css('display', 'none');
        table.append($('<tr></tr>')
            .append($('<td></td>').text(countryName))
            .append($('<td></td>').text(capitalName))
            .append($('<td></td>')
                .append($('<a></a>')
                    .text('[Up]')
                    .attr('id', 'moveUp')
                    .attr('href', '#')
                    .click(moveUp))
                .append(' ')
                .append($('<a></a>')
                    .text('[Down]')
                    .attr('id', 'moveDown')
                    .attr('href', '#')
                    .click(moveDown))
                .append(' ')
                .append($('<a></a>')
                    .text('[Delete]')
                    .attr('id', 'delete')
                    .attr('href', '#')
                    .click(deleteRow))
            ));

        $('#newCountryText').val('');
        $('#newCapitalText').val('');

        function moveUp() {
            let row = $(this).parent().parent();
            row.insertBefore(row.prev());
        }

        function moveDown() {
            let row = $(this).parent().parent();
            row.insertAfter(row.next());
        }

        function deleteRow() {
            $(this).parent().parent().remove();
        }
    }

    function checkForTheLast() {
        let tableLength = $('#countriesTable tr').length;

        $('table tr:last-child').attr('id', 'last');
        $(`table tr:nth-child(${tableLength}) a:nth-child(2)`).css('display', 'none');
    }
}