class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name, isMorning) {
    if(isMorning === true) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }
  findBook(book) {
    // returns array of keys from object
    var shelfNames = Object.keys(this.library.shelves)
    // iterating through each key for the array this.library.shelf
    for(shelfNames in this.library.shelves) {
      // shelfNames is assigned to a value depending on where the loop is in the iteration
      for(var i = 0; i < this.library.shelves[shelfNames].length; i++) {
        if(this.library.shelves[shelfNames][i].title === book) {
          this.library.shelves[shelfNames].splice(i, 1)
          return `Yes, we have ${book}`
        } else if(this.library.shelves[shelfNames][i].title !== book) {
          return `Sorry, we do not have ${book}`
        }
      }
    }
  }
  calculateLateFee(daysLate) {
    var feeAmount = Math.ceil(daysLate * .25)
    return feeAmount
  }
}
module.exports = Librarian;
