function printDeckOfCards(cardArray) {

    let cards = [];

    for (let cardStr of cardArray) {

        let cardFace = cardStr.substring(0, cardStr.length - 1);
        let cardSuit = cardStr.substring(cardStr.length - 1);
        let card;

        try {
            card = createCard(cardFace, cardSuit);
        }
        catch
            (err) {
            console.log(`Invalid card: ${cardStr}`);
            return;
        }

        cards.push(card);
    }

    function createCard(face, suit) {

        // 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
        // S (♠), H (♥), D (♦), C (♣)

        let arrFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let arrSuit = ['S', 'H', 'D', 'C'];
        let isValidFace;

        if (face !== 'J' && face !== 'Q' && face !== 'K' && face !== 'A') {
            isValidFace = arrFace.includes(Number(face));
        } else {
            isValidFace = arrFace.includes(face);
        }

        let isValidSuit = arrSuit.includes(suit);

        if (!isValidFace || !isValidSuit) {
            throw new Error('Error');
        }

        let sign = '';
        switch (suit) {
            case 'S':
                sign = '\u2660';
                break;
            case 'H':
                sign = '\u2665';
                break;
            case 'D':
                sign = '\u2666';
                break;
            case 'C':
                sign = '\u2663';
                break;
        }

        return face + sign;
    }

    console.log(cards.join(' '));
}

// console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));