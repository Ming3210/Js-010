var cv = []
do{
    alert("1. Thêm mới cv \n2. In danh sách \n3. Tìm cv theo id\n4. Thoát")
    let a = +prompt("Nhập lựa chọn")
    function Work(id,title,description,completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    if(a == 1){
        let id = prompt("ID")
        let title = prompt("Tilte")
        let description = prompt("Description")
        let completed = prompt("Completed(T/F)")
        let work = new Work(id,title,description,completed)
        cv.push(work)
    }
    if(a == 2){
        console.log("Danh sách công việc:")
        for (let i = 0; i < cv.length; i++) {
            console.log("Cv" + (i + 1))
            console.log(cv[i].id)
            console.log(cv[i].title)
            console.log(cv[i].description)
            console.log(cv[i].completed)
        }
    }
    if(a == 3){
        let b = prompt("Nhập id cần tìm")
        let found = false
        for(let i = 0;i<cv.length;i++){
            if(b == cv[i].id){
                console.log("CV thu"+(i+1))
                console.log(cv[i].id)
                console.log(cv[i].title)
                console.log(cv[i].description)
                console.log(cv[i].completed)
                found = true
                break;
            }
            if(found == true){
                console.log("Khong tim thay cv")
            }
        }
    }
    var b = a
    
}while( b != 4)
