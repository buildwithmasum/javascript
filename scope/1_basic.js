const a=50//global scope

if(true){//this is called scope . block scope
    let a=10;
    const b=20
   // var c=30
}
//console.log(a); shows not defined bcoz a is declared in if statement and it is only valid in if statement
//console.log(b);//same for b
//console.log(c);//shows 30 therefore we should ignore var. it can lead to error

console.log(a);

//closure-->child parent ki property ko access kr skta hai lekin parent child ki property ko nhi
function one(){
    username:"masum"
    function two(){
        age:18
        console.log(username);
        
    }
    two()
}
one()