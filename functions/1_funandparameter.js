//function addTwonum(number1,number2){
    //console.log(number1+number2);
    
//}
function addTwonum(number1,number2){
    return number1+number2;

    
}

const result=addTwonum(1,2);
//console.log(result);

function loginUserMessage(username = "mass"){//mass is a default value. if u pass arguments then it will automatically overwrite  mass
    if(username===undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());
console.log(loginUserMessage("masum"));

function calculatePrice(...num1){//rest operator, gets all arguments 
    return num1//prints in form of array
}

console.log(calculatePrice(200,300,400));

let user={
    username:"masum",
    age:19
}

function printDetails(anyobject){
    return `my name is ${anyobject.username} and my age is ${anyobject.age}`
}

console.log(printDetails(user))
console.log(printDetails({
    username:"abc",
    age:20
}))

function getElement(arr){
    return arr[1]
}

console.log(getElement([100,200,300,400]));
 