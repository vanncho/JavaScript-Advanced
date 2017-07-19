let Record = (function ok() {

    let id = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.weatherStatus = '';
        }

        toString() {

            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                this.weatherStatus = 'Stormy';
            } else {
                this.weatherStatus = 'Not stormy';
            }
            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.weatherStatus}`;
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
console.log();
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());