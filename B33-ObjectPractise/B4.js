class Book {
    constructor(title,author,publishdYear){
        this.title = title;
        this.author = author;
        this.publishdYear = publishdYear;
    }
}
let library = [
    new Book("Book's Title", "Ming", 2000),
    new Book("Sherlock Homes", "Conan Doyle", 1997),
    new Book("Abcxyz123", "Goodgame", 2005)
]
library.push(new Book("Unnamed Book", "Book", 1990))

for(let i = 0; i < library.length; i++){
    console.log(library[i])
}
