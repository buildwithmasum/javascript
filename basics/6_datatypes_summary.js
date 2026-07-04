//Primitive
//7 types: String,Number,Boolean,null,undefined,Symbol,Bigint

   const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);


//Reference(Non primitive)
//Array,Objects,Function

const heros=["Shaktiman","Ironman"]
let myobj = {
    name:"Masum",
    age:19
}
const myfn=function name(params) {//fn ko as a variable treat kr skte hai
    console.log("hiiii");
    
    
}

//++++++++++++++++++++++++++++++++

// Stack(Primitive),Heap(Non-Premitive)



