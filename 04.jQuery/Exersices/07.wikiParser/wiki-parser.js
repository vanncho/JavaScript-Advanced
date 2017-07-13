function wikiParser(selector) {

    let paragraph = $(selector).text()
        .replace(/'''(.+?)'''/g, (match, g1) => `<b>${g1}</b>`)
        .replace(/''(.+?)''/g, (match, g1) => `<i>${g1}</i>`)
        .replace(/===(.+?)===/g, (match, g1) => `<h3>${g1}</h3>`)
        .replace(/==(.+?)==/g, (match, g1) => `<h2>${g1}</h2>`)
        .replace(/=(.+?)=/g, (match, g1) => `<h1>${g1}</h1>`)
        .replace(/\[\[([^\]\[]+?)\|([^\[\]]+?)]]/g, `<a href="/wiki/$1">$2</a>`)
        .replace(/\[\[([^\]\[]+?)]]/g, `<a href="/wiki/$1">$1</a>`);

    $(selector).html(paragraph);
}