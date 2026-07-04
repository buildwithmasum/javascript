const user={
    username:"Masum",
    age:19,

    welcomemsg:function(){
        console.log(`${this.username},welcome!...`)//Asssss()<>() WE ALL KNOWWWWW!...THIS REFERS TO CURRENT OBJECT
        console.log(this)//prints cuurent context
    }

}
//user.welcomemsg()
//user.username="abc"
//user.welcomemsg()
//console.log(this);==>{}




//*****************IMP NOTES**********/
// Browser mein:
//console.log(this); // Window {} — kyunki browser mein global object = window hota hai

// Node.js mein:
//console.log(this); // {} — kyunki Node har file ko module maanta hai, aur module ka this = empty object (module.exports)




//fn me bina object ke this use nhi kr skte

//function chai(){
    //let username="masum"
   // console.log(this);
    
    //console.log(this.username);//IT shows undefined
    
//}

//const  chai=function(){
 //   let username="masum"
  // console.log(this.username);//undefined
//}

const  chai=()=>{//Arrow function
    let username="masum"
   console.log(this.username);//undefined
}
//chai()

/************arrow fn */
//const addtwo=(num1,num2)=>{
//    return num1+num2; explict return
//}
//curly brackets me return use hoga parenthisis me nhi
//const addtwo=(num1,num2)=> num1+num2;
//const addtwo=(num1,num2)=> (num1+num2);//implicit return 13
const addtwo=(num1,num2)=>( {username:"masum"})//obj ko parenthis mewrap krke hi return kra jata hai direct nhi
console.log(addtwo(5,8));


//nullish coalescing operator

let val1=5 ?? 10;
console.log(val1);

let val2=null??10;
console.log(val2);
    


