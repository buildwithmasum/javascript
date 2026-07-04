
// Singleton: Constructor se object banane par multiple objects ban sakte hain.
// "Singleton" ek design pattern hai jisme ensure kiya jata hai ki class ka sirf ek hi instance (object) ho.
// JavaScript me object literals singleton nahi hote; singleton pattern alag se implement kiya jata hai.

//object literals
const  mysymbol=Symbol("key1")//symbol defined

const jsUser={
    name:"Masum",//by default name ko "name" me convert kr leta hai
    "full name":"Masumm chaudhary",
    [mysymbol]:"mykey1",//it is a syntax to write symbol in object otherwise its type shows string
    age:18,
    location:"Gujarat",
    isLoggedIn:false,
}

console.log(jsUser.name);

console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysymbol]);

jsUser.location="Mehsana"
console.log(jsUser["location"]);

//Object.freeze(jsUser)// after applying FREEZE we cant change the value of object

//jsUser.location="rajkot"
//console.log(jsUser);

jsUser.greeting= function(){
    console.log("hiii js user");
    
}
jsUser.greetingTwo= function(){
    console.log(`hii,${this.name}`);
    
}
jsUser.greeting();
console.log(jsUser.greeting());//this fn returns nothing, therefore console log print undefined
console.log(jsUser.greetingTwo());
