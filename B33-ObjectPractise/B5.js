function Book(title, author, publishedYear){
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}
Book.isAvailable = true
Book.isBorrow = false
Book.retunBook = true
function Library(){
    function isBookAvailable(){
       
            if(book[isAvailable] == true){
                isBookAvailable = true;
            }else{
                isBookAvailable = false;
            
            }
        }
}

let book1 = new Book("Book's Title", "Ming", 2000)
let book2 = new Book("Sherlock Homes", "Conan Doyle", 1997)
let book3 = new Book("Abcxyz123", "Goodgame", 2005)
book1.isAvailable = false
book1.isBorrow = true
book1.retunBook = false
console.log("A đã mượn book1, book1 ko có sẵn")
console.log("Có sẵn :"+book1.isAvailable)
console.log("Đã đc mượn :"+book1.isBorrow)
console.log("Đã trả :"+book1.retunBook)


console.log
book1.isAvailable = true
book1.isBorrow = false
book1.retunBook = true
console.log("A đã trả book1, book1 có sẵn")
console.log("Có sẵn :"+book1.isAvailable)
console.log("Đã đc mượn :"+book1.isBorrow)
console.log("Đã trả :"+book1.retunBook)

if(book1.isAvailable == true){
    console.log("Sách có sẵn")
}else console.log("Sách ko có sẵn")


