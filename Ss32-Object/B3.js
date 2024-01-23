let number = prompt("Nhập số lượng sinh viên")
function Student(){
    this.id = prompt("Nhập id")
    this.name = prompt("Nhập tên")
}
for(let i =1;i<=number;i++){
   let sts = new Student()
   console.log(sts)
}
