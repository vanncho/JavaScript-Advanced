function add(n) {

    let v = function (x) {
        return add (n + x);
    };

    v.toString = function () {
        return n;
    };

    return v;
}

console.log(add(1)(6)(-3));