//push concat spread flat
const marvel =["ironman","spider","thor"]
const dc=["batman","superman","flash"]
//marvel.push(dc)  existing array mai hi push krega aur whole dc ko as a 4 element count krega
//console.log(marvel);
//console.log(marvel[3][1]);

//const allhero=marvel.concat(dc)//new arr retuen krega
//console.log(allhero);

const allhero=[...marvel,...dc]//same as concat 
console.log(allhero);

const arr=[1,2,3,[4,5,6],7,8,[9,10],11]
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(arr.flat(Infinity));


console.log(Array.isArray("MAsum"));
console.log(Array.from("MAsum"));//converts into array
console.log(Array.from({name:"MAsum"}));

let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3));//will make array
