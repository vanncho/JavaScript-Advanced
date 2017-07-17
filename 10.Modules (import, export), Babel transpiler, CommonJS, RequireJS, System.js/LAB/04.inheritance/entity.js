class Entity {

    constructor(name) {

        if (this.constructor === Entity) {
            throw new TypeError('Abstract class can not be instantiated.');
        }

        this.name = name;
    }
}

module.exports = Entity;