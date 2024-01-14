const accountId = 144553
let accountEmail = "Ravi@gmail.com"
var accountPassword = "123456"
accountCity = "Pali"
let accountState;

// accountId = 2 // not allowed

accountEmail = "Malviya@gmail.com"
accountPassword = "63500"
accountCity = "Jodhpur"

console.log(accountId);

/*
Prefer not use to var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])