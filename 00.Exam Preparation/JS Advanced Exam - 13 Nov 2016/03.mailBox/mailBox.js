class MailBox {

    constructor() {
        this._messageCount = 0;
        this.messages = new Map();
    }

    get messageCount() {
        return this._messageCount;
    }

    addMessage(subject, text) {

        if (subject.length > 0 && text.length > 0) {
            this.messages.set(subject, text);
            this._messageCount++;
        }

        return this;
    }

    deleteAllMessages() {
        this.messages.clear();
        this._messageCount = 0;
    }

    findBySubject(substr) {

        let resArray = [];

        for (let [k, v] of this.messages) {

            if (k.includes(substr)) {
                resArray.push({
                    subject: k,
                    text: v
                });
            }
        }

        return resArray;
    }

    toString() {
        let res = '';

        if (this.messages.size === 0) {
            res += ' * (empty mailbox)';
        } else {

            let s = this.messages.size;
            let c = 1;
            for (let [k, v] of this.messages) {

                if (c < s) {
                    res += ` * [${k}] ${v}\n`;
                } else {
                    res += ` * [${k}] ${v}`;
                }

                c++;
            }
        }

        return res;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());