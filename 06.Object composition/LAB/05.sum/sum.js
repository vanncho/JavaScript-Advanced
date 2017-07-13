function getModel() {

    let input1;
    let input2;
    let sum;

    function init(selector1, selector2, resultSelector) {
        input1 = $(selector1);
        input2 = $(selector2);
        sum = $(resultSelector);
    }

    function add() {
        sum.val(Number(input1.val()) + Number(input2.val()));
    }

    function subtract() {
        sum.val(Number(input1.val()) - Number(input2.val()));
    }

    return {
        init,
        add,
        subtract
    }
}