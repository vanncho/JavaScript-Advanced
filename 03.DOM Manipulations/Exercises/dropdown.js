function addItem() {

    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    let select = document.getElementById('menu');
    let currOption = document.createElement('option');

    if (inputText !== '' && inputValue !== '') {

        currOption.value = inputValue;
        currOption.textContent = inputText;
        select.appendChild(currOption);
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}