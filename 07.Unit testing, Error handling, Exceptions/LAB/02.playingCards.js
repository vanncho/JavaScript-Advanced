function createCard(face, suit) {

    // 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
    // S (♠), H (♥), D (♦), C (♣)

    let arrFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let arrSuit = ['S', 'H', 'D', 'C'];
    let isValidFace = arrFace.includes(face);
    let isValidSuit = arrSuit.includes(suit);

    if (!isValidFace || !isValidSuit) {
        throw new Error('Error');
    }

    let sign = '';
    switch (suit) {
        case 'S': sign = '\u2660'; break;
        case 'H': sign = '\u2665'; break;
        case 'D': sign = '\u2666'; break;
        case 'C': sign = '\u2663'; break;
    }

    return face + sign;
}

console.log(createCard('K', 'S'));