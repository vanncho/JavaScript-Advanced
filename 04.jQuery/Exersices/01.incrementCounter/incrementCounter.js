function increment(selector) {

    $(selector)
        .append($('<textarea class="counter" disabled="disabled">0</textarea>'))
        .append($('<button class="btn" id="incrementBtn">Increment</button>'))
        .append($('<button class="btn" id="addBtn">Add</button>'))
        .append($('<ul class="results"></ul>'));
    
    $('#incrementBtn').on('click', incrementValue);
    $('#addBtn').on('click', addValue);
    
    function incrementValue() {
        let value = Number($('.counter').val());
        value += 1;
        $('.counter').val(value);
    }
    
    function addValue() {
        $('.results').append($(`<li>${$('.counter').val()}</li>`));
    }
}