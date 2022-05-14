// try an object
function shelfBook(book, genreShelf) {
  if(book.genre === 'sciFi' && genreShelf.length < 3) {
    genreShelf.unshift(book)
    return genreShelf
  }
}
function unshelfBook(bookTitle, genreShelf) {
  for(i = 0; i < genreShelf.length; i++) {
    if(genreShelf[i].title === bookTitle) {
      genreShelf.splice(i, 1)
      return genreShelf
    }
  }
}
function listTitles(shelfContent) {
  var bookTitles = []
  for(i = 0; i < shelfContent.length; i++) {
    bookTitles.push(shelfContent[i].title)
  }
  bookTitles = bookTitles.join(', ')
  return bookTitles
}
function searchShelf(genreShelf, bookTitle) {
  Boolen (genreShelf.filter(function(a){
    return a.title === bookTitle
  }))
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
