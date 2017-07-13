class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(clientId) {

        if (typeof clientId !== 'string' || clientId.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = clientId;
    }
    get clientId() {
        return this._clientId;
    }

    set email(email) {
        let emailRegex = new RegExp(/^[\w]+@[A-Za-z.]+$/);

        if(!emailRegex.test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = email;
    }
    get email() {
        return this._email;
    }

    set firstName(firstName) {

        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        let lettersRegex = new RegExp(/^[A-Z-a-z]+$/);

        if (!lettersRegex.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = firstName;
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {

        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        let lettersRegex = new RegExp(/^[A-Z-a-z]+$/);

        if (!lettersRegex.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lastName;
    }
    get lastName() {
        return this._lastName;
    }
}

// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');

// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');

// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');

let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');