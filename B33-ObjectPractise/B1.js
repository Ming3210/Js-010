class person {
    constructor(name,age,address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let person1 = new person("Minh", 18, "Thanh Hóa");
delete person1.age
console.log(person1);
person1.birthDate = ("01/05/2005")
console.log(person1)