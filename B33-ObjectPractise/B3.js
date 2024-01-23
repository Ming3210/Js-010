let phoneBook = {
    contact1: {
    name: "Alice",
    phone: "123-456-7890",
    email:
    "alice@example.com",
    },
    contact2: {
    name: "Bob",
    phone: "987-654-3210",
    email:
    "bob@example.com",
    },
    displayInfo : function () {
        for(let key in phoneBook) {
            let contact = phoneBook[key]
            if(typeof contact == "object"){
                console.log(contact.name)
                console.log(contact.phone)
                console.log(contact.email)
                console.log("--------------------------------")
            }
        }
    }
}
phoneBook.displayInfo()