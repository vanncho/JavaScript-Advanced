function getArticleGenerator(articles) {

    let content = $('#content');

    return function () {

        if (articles.length > 0) {
            let article = $(`<article>${articles.shift()}</article>`);
            content.append(article);
        }
    }
}