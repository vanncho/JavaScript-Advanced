function search() {

    let liItems = $('ul#towns li');
    let searchText = $('#searchText').val();
    let count = 0;

    for (let i = 0; i < liItems.length; i++) {

        if ((liItems[i].textContent).includes(searchText)) {
            liItems[i].style.fontWeight = 'bold';
            count++;
        }
    }

    $('#result').text(`${count} matches found.`);
}