function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  var charSheet = {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
   }
  return charSheet
}

function saveReview(uniqueReviews, readerReviews) {
  if(readerReviews.includes(uniqueReviews)) {
    return readerReviews
  }
  readerReviews.push(uniqueReviews)
  return readerReviews
}

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20
  return pageCount
  // var pagesInBook = 0
  // for (var i =0; i < title.length; i++) {
  //   pagesInBook = pagesInBook + 20
  // }
  // return pagesInBook
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre,
  }
  return book
}
function editBook(bookToEdit) {
  bookToEdit.pageCount = ((bookToEdit.pageCount) * .75)
  return bookToEdit.pageCount
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
