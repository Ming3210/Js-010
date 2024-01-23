class Product{
    constructor(id,name,price,quantily){
        this.id = id
        this.name = name
        this.price = price
        this.quantily = quantily
    }
}
let a  = prompt("Bao nhiêu sản phẩm?");
for(let i = 1; i <=a;i++) {
    let id = prompt("Nhập Id")
    let name = prompt("Nhập tên sản phẩm");
    let price = prompt("Nhập giá sản phẩm");
    let quantily = prompt("Nhập số lượng sản phẩm");
    let product = new Product(id,name,price,quantily)
    console.log(product)
}