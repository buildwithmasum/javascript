 //dates 

 let mydate= new Date();// object
 console.log(mydate.toString());
 console.log(mydate.toDateString());
 console.log(mydate.toISOString());
 console.log(mydate.toJSON());
 console.log(mydate.toLocaleDateString());
 console.log(mydate.toLocaleString());

 
 let myCreatedDate=new Date(2026,5, 25)//moths start from 0
 console.log(myCreatedDate.toDateString());
 let my_CreatedDate=new Date(2026,5, 25,10,30)//moths start from 0
 console.log(my_CreatedDate.toLocaleString());

 // *****TIMESTAMP*****

 let myTimeStamp=Date.now();
 console.log(myTimeStamp);//milisec from 1 jan 1970
 console.log(Math.floor(myCreatedDate.getTime()/1000));//into seconds

 
 let newDate= new Date();
 console.log(newDate.getDay());
 console.log(newDate.getFullYear());
 
console.log(
 newDate.toLocaleString('default',{
    weekday:"long"
 }))