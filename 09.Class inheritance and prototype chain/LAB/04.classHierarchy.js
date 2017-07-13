function solve() {

    class Figure {
        constructor() {

            if (this.constructor === Figure) {
                throw new TypeError('Abstract class "Widget" cannot be instantiated directly.');
            }
        }

        get area() {
            return undefined;
        }

        toString() {
            let type = this.constructor.name;
            return type;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Circle - radius: ${this.radius}`;
        }
    }

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Rectangle - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let r = new Figure(3, 4)
console.log(r.toString());