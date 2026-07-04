//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="x3y"
tinderUser.name="abc"
tinderUser.isLoggedIn=false;

//console.log(tinderUser);
const regularUser={
    email:"abc@dmail.com",
    fullname:{
        userfullname:{
            firstname:"masum",
            lastname:"chaudhary"

        }
    }

}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
//const obj3={obj1,obj2} obj ke andr object
//const obj3=Object.assign({},obj1,obj2)//target{} source obj1,obj2 other wise obj1 is  the target and obj2 in saource
const obj3={...obj1,...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//return array of key value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

