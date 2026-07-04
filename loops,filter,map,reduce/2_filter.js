let myarr=[1,2,3,4,5,6,7,8,9]

const newarr=myarr.filter((num)=>num>4)
console.log(newarr);

const books = [
  {
    bookName: "The Alchemist",
    type: "Fiction",
    publish: 1988,
    edition: 2014
  },
  {
    bookName: "Clean Code",
    type: "Programming",
    publish: 2008,
    edition: 2011
  },
  {
    bookName: "Sapiens: A Brief History of Humankind",
    type: "History",
    publish: 2011,
    edition: 2015
  },
  {
    bookName: "Introduction to Algorithms",
    type: "Technology",
    publish: 1990,
    edition: 2009
  },
  {
    bookName: "1984",
    type: "Fiction",
    publish: 1949,
    edition: 2003
  },
  {
    bookName: "JavaScript",
    type: "Programming",
    publish: 2008,
    edition: 2015
  },
];

let userbooks=books.filter((bk)=>bk.type=="Fiction");
console.log(userbooks);

 userbooks=books.filter((bk)=> bk.type=="Programming"&& bk.publish==2008);
 console.log(userbooks);

 userbooks=books.filter((bk)=> { 
    return bk.publish>=2000
});
 console.log(userbooks);