function domSearch(selector, boolean) {

    let contentDiv = $(selector);

    contentDiv
        .addClass('items-control')
        .append($('<div class="add-controls"></div>')
            .append($('<label>Enter text:</label>'))
            .append($('<input type="text" id="inputText"/>'))
            .append($('<a class="button">Add</a>')
                .on('click', addElement)))
        .append($('<div class="search-controls"></div>')
            .append($('<label>Search:</label>'))
            .append($('<input type="text" id="searchText">')
                .on('change', searchForMatch)))
        .append($('<div class="result-controls"></div>')
            .append($('<ul class="items-list"></ul>')));

    function searchForMatch() {

        let word = $('#searchText').val();
        let allLi = $('.result-controls li');
        for (let obj of allLi) {

            let currLi = $(obj);
            let currLineText = currLi.text().substring(1);

            if (boolean) {

                let match = currLineText.includes(word);
                if (match) {
                    currLi.removeAttr('style');
                    currLi.css('display', 'inline-block');
                }
            } else {
                let lineToLower = currLineText.toLowerCase();
                let wo = word.toLowerCase();

                let match = lineToLower.includes(wo);
                console.log(match);

                if (match) {
                    currLi.removeAttr('style');
                    currLi.css('display', 'inline-block');
                }
            }
        }
    }

    function addElement() {

        let ulItems = $('.items-list');
        let inputText = $('#inputText');

        ulItems.append($('<li class="list-item" style="display:none;"></li>')
            .append($('<a class="button">X</a>')
                .on('click', deleteElement))
            .append($(`<strong>${inputText.val()}</strong>`)));

        inputText.val('');
    }
    
    function deleteElement() {
        $(this).parent().remove();
    }
}