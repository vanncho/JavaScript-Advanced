class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    get firstTopic() {
        let data = this.topics[0];

        if (data !== undefined) {
            return {
                title: data[0],
                date: data[1]
            }
        }
    };

    get lastTopic() {
        let data = this.topics[this.topics.length - 1];

        if (data !== undefined) {
            return {
                title: data[0],
                date: data[1]
            }
        }
    };

    addTopic(title, date) {
        let a = [title, date];
        this.topics.push(a);

        this.topics.sort((a, b) => {

            if (a[1] < b[1]) {
                return -1;
            } else if (a[1] > b[1]) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    toString() {
        let str = `Course "${this.title}" by ${this.trainer}\n`;
        for (let i = 0; i < this.topics.length; i++) {

            if(i < this.topics.length - 1) {
                str += ` * ${this.topics[i][0]} - ${this.topics[i][1]}\n`;
            } else {
                str += ` * ${this.topics[i][0]} - ${this.topics[i][1]}`;
            }
        }

        return str;
    }
}

// let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
// console.log("" + js);
//
// js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
// js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
// js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
// js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
// console.log("First topic: " + JSON.stringify(js.firstTopic));
// console.log("Last topic: " + JSON.stringify(js.lastTopic));
// console.log("" + js);

// let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
//     .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
//     .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
//     .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
// console.log("" + php);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov");
php.addTopic("Strings", new Date(2017, 2, 16, 18, 0));
php.addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0));
php.addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);