function createComputerHierarchy() {

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {

            if (this.constructor === Computer) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(battery) {
            let isIt = battery instanceof Battery;

            if (!isIt) {
                throw new TypeError('Not instance of Battery class');
            }

            this._battery = battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.monitor = monitor;
            this.keyboard = keyboard;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(keyboard) {
            let isIt = keyboard instanceof Keyboard;

            if (!isIt) {
                throw new TypeError('Not instance of Keyboard class');
            }

            this._keyboard = keyboard;
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(monitor) {
            let isIt = monitor instanceof Monitor;

            if (!isIt) {
                throw new TypeError('Not instance of Monitor class');
            }

            this._monitor = monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}