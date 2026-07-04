const accountId = 12
let accountEmail="abc@google.com";
var accPassword="1234"
accountCity="jaipur";
/* Prefer not to use var because of issue in block scope and functionnal scope*/ 
// accountId=7  const cant be changed. all other can be
console.log(accountId);
console.table([accPassword,accountEmail,accPassword,accountCity]);//prints in form of table
