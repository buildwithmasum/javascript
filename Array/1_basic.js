const myarr=[0,1,2,3,4]
const hero=["flying jatt","Shaktiiiiimaaan"]
const myarr2=new Array(1,2,3)

console.log(myarr[0]);
 // Array Methods

 myarr.push(5)
 myarr.push(6)

console.log(myarr);
myarr.pop()
console.log(myarr);

myarr.unshift(9)//adds 9 at 0th position and shift every ele
myarr.shift()//remove 9
//myarr.shift()//remove 0
//myarr.shift()//remove 1
console.log(myarr);

console.log(myarr.includes(0))
console.log(myarr.indexOf(1));

let newarr=myarr.join();
console.log(newarr);
console.log(typeof newarr);//string


// slice , splice
//main diff: slice original array ko cut nhi krta jb ki splice krta hai.slice org arr ki copy uthata hai jb ki splice khud org arr

console.log("A",myarr);
console.log(myarr.slice(1,3))//range inlude nhi hoti hai jb ki splice me hoti hai.
console.log("B",myarr);//nothing changed
console.log(myarr.splice(1,3))//arr mai see 1 se 3 tak element nikal lena
console.log("c",myarr);//[0,4,5]

