//Immediately Invoked Function Expression

(function chai() {//global scope se pollution hoti hai khi bar jaise ki uske jo variables ya j bhi hai usko hatane ke lite IIFE ka use kiya
   //Named IIFE
    console.log("Db connected");
    
})();//semicolon is required for iife to end bcoz it diesnt know ki end kab hona hai. means ki it doesnt know ki context rokna kha hai



((name)=> {
    //Simple IIFE
    console.log(`Db connected ${name}`);
    
})("masum");

