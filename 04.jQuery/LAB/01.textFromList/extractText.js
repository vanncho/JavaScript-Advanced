function extractText() {

    let arrOfLi = $("ul#items li");
    let arr = [];
    for (let i = 0; i < arrOfLi.length; i++) {
        arr.push(arrOfLi[i].textContent);
    }

    let result = arr.join(', ');
    $('#result').text(result);
}