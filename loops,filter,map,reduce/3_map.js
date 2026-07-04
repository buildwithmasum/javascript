const num=[1,2,3,4,5,6,7]
console.log(num.map((n)=>n+10));
//chaining
const newnum=num.map((n)=>n*10).map((n)=>n+1).filter((n)=>n>30)
console.log(newnum);
