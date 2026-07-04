const score=100
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//precision value after num it shows 2 ffractional num

newnum = 123.765

console.log(newnum.toPrecision(3));//does round off

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));//by default it will arrange 0's accordingly to us standards
console.log(Number.MIN_SAFE_INTEGER);

//**********************Math************/
console.log(Math);
//console.log(Math.abs(-4));//convert neg to pos
//console.log(Math.round(4.2));//4
//console.log(Math.ceil(4.2));//5
//console.log(Math.floor(4.6));//4

console.log(Math.random());//give value btw 0 to 1
console.log((Math.random()*10) + 1);//+1 is for avoid 0 value

const min=10;
const max=20;
console.log( Math.floor(Math.random()* (max-min+1) )+ min );




