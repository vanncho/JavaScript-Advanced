function createMixins() {

    function computerQualityMixin(classToExtend) {

        classToExtend.prototype.getQuality = function() {
            // returns a number equal to the computer's (processorSpeed + RAM + hardDiskSpace) / 3.
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            //if processorSpeed > (ram / 4) returns true, otherwise false.
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            //if hardDiskSpace  > Math.floor(ram * processorSpeed) returns true, otherwise false.
            return this.hardDiskSpace > (Math.floor(this.ram * this.processorSpeed));
        };
    }

    function styleMixin(classToExtend) {

        classToExtend.prototype.isFullSet = function () {
            //if the computer's manufacturer, keyboard's manufacturer and monitor's manufacturer
            // all have the same name returns true, otherwise false.
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer && this.keyboard.manufacturer === this.monitor.manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            // if the computer battery's expectedLife is 3 years or more and the computer's color is either "Silver" or "Black"
            // and the computer's weight is less than 3 kilograms returns true, otherwise returns false.
            return this._battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3;
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}