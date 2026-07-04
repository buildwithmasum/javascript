// some basic loop taht u know:for ,while,do-while

//for of loop

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
    
}

let Name="Masum Chaudhary";

for (const s of Name) {
     console.log(s);
    
}

//Maps
const map=new Map();
map.set(1,"a");
map.set(2,"b");
map.set(3,"c");
map.set(4,"d");

//console.log(map)
//using for of
for (const [key,value] of map) {
    console.log(key + ":-" + value)
}
//map.clear()--> clear wholw map and print Map(0){}
//map.delete(1) will delete 1:a

console.log(map.entries());//this is iterator

//we cant traverse object using for of


//    FOR IN LOOP

//can traverse object
const myobj={
    js:"javascript",
    cpp:"c++",
    py:"python",
    txt:"txt"
}
for (const key in myobj) {
    console.log(`${key} is the shoetcut for ${myobj[key]}`);
    
    
}


//for in loop for  array

for (const key in arr) {
   console.log(arr[key])//if u only print keys it start from 0,1,2... because in arr keys start from 0
    
    
}
//map pr is tarh se iteration nhi kiya ja skta
for (const key in map) {
    console.log(key);
    
    
    
}

// for each fn

//arr.forEach((item)=>{
 //   console.log(item);
    
//})

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

function printarr(item){
    console.log(item);
    
}
arr.forEach(printarr)



const nums=[
    {
        language:"javascript",
        filetype:"js"
    },
    {
        language:"python",
        filetype:"py"
    },
    {
        language:"cpp",
        filetype:"c++"
    },
    {
        language:"hyper text ...",
        filetype:"html"
    }
]

nums.forEach((item) => {
    console.log(item.language + " "+ item.filetype);
    
});

// for each kuch bhi return nhi krta  

