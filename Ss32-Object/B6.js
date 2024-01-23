class Phone{
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
let phones = [
    new Phone(1, "iphone 12", 2000000),
    new Phone(2, "iphone 11", 1000000),
    new Phone(3, "samsung note 10", 5000000),
]

for(let i = 0; i < phones.length; i++){
   for(let j = i+1; j < phones.length; j++){
    if(phones[i].price>phones[j].price){
        let temp = phones[i].price;
        phones[i].price = phones[j].price;
        phones[j].price = temp;

        temp = phones[i].name;
        phones[i].name = phones[j].name;
        phones[j].name = temp;

        temp = phones[i].id;
        phones[i].id = phones[j].id;
        phones[j].id = temp;
        }
    }
}
console.log(phones);