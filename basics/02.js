const accountID = 123456

let account_name = "Debasish"

var accountMail = "debasish@google.com" // should be avoided as it gives scope errors.

accountpassword = "2345"

let accountState;

// not allowed by javascript as its is constant variable.
// accountID = 56789
// console.log(accountID)

// print single line
// console.log(account_name='Debu');
// console.log(accountpassword='23');
// // console.log(accountMail='test@mail.com');
// console.log(accountMail);

console.table([accountID,accountMail,account_name,accountpassword,accountState])
console.table([typeof(accountID),typeof(accountState),typeof(accountMail),typeof(account_name),typeof(accountpassword)])
