let info = {
    id : prompt("ID"),
    name : prompt("Name"),
    phone : prompt("Phone"),
    address: prompt("Address"),
}
delete info.address
let newInfo = {...info, email : prompt("Email"),}
console.log(newInfo)