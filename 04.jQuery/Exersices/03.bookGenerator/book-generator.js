// function createBook(selector, title, author, isbn) {
//
//     let add = (function () {
//         let counter = 0;
//         return function () {return counter += 1;}
//     })();
//
//     solve();
//
//     function solve() {
//
//         $(selector)
//             .append($(`<div id="book${add}"></div>`)
//                 .append($(`<p class="title">${title}</p>`))
//                 .append($(`<p class="author">${author}</p>`))
//                 .append($(`<p class="isbn">${isbn}</p>`))
//                 .append($('<button>Select</button>')
//                     .click(addAttr))
//                 .append($('<button>Deselect</button>')
//                     .click(rmvAttr)));
//
//
//         function addAttr() {
//             let div = $(this).parent();
//             div.css('border', '2px solid blue');
//         }
//
//         function rmvAttr() {
//             let div = $(this).parent();
//             div.css('border', 'medium none');
//         }
//     }
// }

// function createBook(selector, title, author, isbn) {
//
//     let count = $('div[id*="book"]').toArray().length + 1;
//
//     $(selector)
//         .append($(`<div id="book${count}"></div>`)
//             .append($(`<p class="title">${title}</p>`))
//             .append($(`<p class="author">${author}</p>`))
//             .append($(`<p class="isbn">${isbn}</p>`))
//             .append($('<button>Select</button>')
//                 .click(addAttr))
//             .append($('<button>Deselect</button>')
//                 .click(rmvAttr)));
//
//
//     function addAttr() {
//         let div = $(this).parent();
//         div.css('border', '2px solid blue');
//     }
//
//     function rmvAttr() {
//         let div = $(this).parent();
//         div.css('border', 'medium none');
//     }
// }

function createBook(selector,title,author,isbn) {

    let idBook = $('div[id*="book"]').toArray().length + 1;
    var div  = $('<div>').attr('id',idBook)
        .append($('<p>').addClass('title').text(title))
        .append($('<p>').addClass('author').text(author))
        .append($('<p>').addClass('isbn').text(isbn))
        .append($('<button>').text("Select").click(addBorder))
        .append($('<button>').text("Deselect").click(removeBorder))
    $(selector).append(div);

    function addBorder() {
        $(div).css('border','2px solid blue');
    }

    function removeBorder() {
        $(div).css('border','');
    }
}