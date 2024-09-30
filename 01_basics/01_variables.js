const accountId = 144553
let accounEmail = "Shailendrashukla@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId=2 // not allowed

/*
prefer not to use var 
reason behind it is it creates the issue of block scope and functional scope 
*/
console.log(accountId);
accounEmail="hc@hc.com"
accountPassword= "432424"
accountCity= "jaipur"
console.table([accountId , accounEmail , accountPassword , accountCity , accountState])


