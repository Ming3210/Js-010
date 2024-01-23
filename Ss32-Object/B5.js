class Book{
    constructor(author,name)
    {
        this.author = author;
        this.name = name
    }
}
let arr = []
let subArray = []
let book = new Book("Valve","The International")
arr.push(book.name)
subArray.push(book.author)
let book2 = new Book("Michos","Băng Hoại 3")
arr.push(book2.name)
subArray.push(book2.author)
let book3 = new Book("FromSoftware","Sekiro Die Twice")
arr.push(book3.name)
subArray.push(book3.author)
let book4 = new Book("SigmaTeam","Alines Shooter")
arr.push(book4.name)
subArray.push(book4.author)
let book5 = new Book("Capcom","Plant Vs Zombie")
arr.push(book5.name)
subArray.push(book5.author)

let a = prompt("Nhập tên tác giả")
let count = 0
for(let i=0; i<5; i++){
    if(a == subArray[i]){
        console.log(arr[i])
        break;
    }
    else count++;
}
if(count == 5) alert("Không tìm thấy tên tác giả")