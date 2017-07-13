(function () {

    let iid = 0;

    return class Extensible {

        constructor() {
            this.id = iid;
        }

        extend(template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    let element = template[key];
                    if (typeof element === 'function') {
                        iid++;
                    } else {
                        this[key] = element;
                        iid++;
                    }
                }
            }
        }

        static get id() {
            return iid;
        }
    }
})();
//
// let obj1 = new Extensible();
// let obj2 = new Extensible();
// let obj3 = new Extensible();
// console.log(obj1.id);
// console.log(obj2.id);
// console.log(obj3.id);


let a = (function () {

    let id = 0;
    return function Extensible() {

        let obj = {
            extend: function (template) {
                for (let key in template) {
                    if(template.hasOwnProperty(key)) {
                        let element = template[key];
                        if (typeof element === 'function') {
                            obj.__proto__[key] = element;
                        } else {
                            obj[key] = element;
                        }
                    }
                }

                id++;
            },
            get id() {
                return id;
            }
        };

        return obj;
    }
})();


let b = new a();
let c = new a();
console.log(b.extend());
console.log(c.extend());
console.log(c.id);