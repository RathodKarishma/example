

    // let name="karishma"
    // console.log(name.length)
    // console.log(name.charAt(5))

//     let fruits="apple,banana,mango"
//     console.log(fruits.slice(5,12));//substring,substr...

// let a="karishma kumari rathod"
// let b="kumari"
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// console.log(a.concat(" ",b))
// console.log(a.trim());//white space eduthukum...

// console.log(a.trimStart())
// console.log(a.trimEnd())

// console.log(a.repeat(5));

// console.log(a.replace("kumari","kumariii"));

// let d="hy iam good girl"
// console.log(d.replaceAll("hy","HY"));


// let c="5";
// console.log(c.padStart(2,"0"))
// console.log(c.padEnd(4,"*"));

// let e="karishma KUMARI"
// console.log(e.split("K"));//a string can be converted to an with the split() method.

// // // ...........................................................................................................

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toString());
// console.log(fruits.join("AND"));

// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.pop());
// console.log(fruit);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("kiwi"));
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("Lemon"));
// console.log(fruits)

//concat

// const x = ["apple", "Lemon"];
// const y = ["Egg", "Tobias", "Linus"];
// console.log( x.concat(y))

// //flat 
// const myArr = [[1,2],[3,4],[5,6],[7,8]];
// console.log(myArr.flat()) 

// splice
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(2, 0, "Lemon", "Kiwi"))
// console.log()

// slice method slies out piece of an array into a new array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1,4))


//............................................................................................................................




//MAP

// const number=[1,2,3,4,5];
// const a=number.map(element=>element+10)
// console.log(a) 


// const number1=[4,25,9];
// const b=number1.map((num)=>Math.sqrt(num))
// console.log(b)


//FILTER  .. graterthen lessthen filter panni kudukum..% 2==0

// const num=[1,2,3,4,5]
// const a=num.filter((element)=>element>4)
// console.log(a)
// const a=num.filter((element)=>element % 2 ==0)
// console.log(a)


//FIND first graternumber will be taken 

// const a=[5,54,7,4,22,93,33]
// const b=a.find((num)=>num > 4)
// console.log(b); 


//Some.. boolean...

// const array = [1, 2, 3, 4, 5];
// const even = array.some((element) => element % 2== 0);
// console.log(even);

// every..all element should be provided ...boolean

// const array1 = [1, 30, 39, 29, 10, 13];
// const arr=array1.every((num)=>num < 50 )
// console.log(arr)

//indexOf...if not present it will return -1...

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// const a=beasts.indexOf("camel");
// console.log(a);

//foreach

// const a=["karish","resh","manish"]
// const b=a.forEach(element => console.log(element));
  

//include....boolean.

// const arr=["kk","rr","sss"]
// const arr1=arr.includes("kk")
// console.log(arr1)




//sort,ascending oder,,,,,,,,,,,,,

// const arr=["kk","aa","sss"]
// const arr3=arr.sort()
// console.log(arr3);

// const ar=["d","w","a"]
// const a=ar.reverse()
// console.log(a);


//entries [key,value]

// const a=["pen","banana","candle"]
// const b=object.entries()
// console.log(b)


// console.log(b.next().value)

// const a = ["a", "b", "c"];

// for (const [index, element] of a.entries()) {
//   console.log(index, element);
// }

// //Array.from....
 
// ................................................................................................................................
// const items=[{id:1,
//     name:"tv",
//     type:"electonics",
//     actualrate:13000,
//     discount:10,
//     isActive:true

// },
// {id:2,
//     name:"light",
//     type:"furniture",
//     actualrate:140,
//     discount:20,
//     isActive:true

// },
// {id:3,
//     name:"wood",
//     type:"furniture",
//     actualrate:1400,
//     discount:10,
//     isActive:true

// },
// {id:4,
//     name:"soap",
//     type:"cosmatic",
//     actualrate:13000,
//     discount:10,
//     isActive:false

// },
// {id:5,
//     name:"window",
//     type:"furniture",
//     actualrate:13000,
//     discount:10,
//     isActive:true

// }]


// const a=items.filter(element=>!element.isActive)
//     console.log(a)

// const item=items.map(element=>{
//     if(element.type==="furniture"){
//         element.discount=30;
//     }
//     return element
// })

// console.log(item)

// const xx = items.sort((items, b) => items.name.localeCompare(b.name));

// console.log(xx);


// let index = {
//     id: 5,
//     name: "window",
//     type: "furniture",
//     actualrate: 13000,
//     discount: 10,
//     isActive: true
// };


// let indexs= items.map(item => item.id);

// let indexOf = indexs.indexOf(index.id);

// console.log(indexOf);  

// const totalActualRate = items.reduce((total, items) => {
//     return total + parseInt(items.actualrate);
// }, 0);

// console.log("Total Actual Rate:", totalActualRate);



// const tatkalBooking=new Promise((resolve,reject)=>{
//     let booking=true;
//     if (booking) {
//         resolve("karishma")
        
//     } else {
//         reject()
//     }
// })

// tatkalBooking.then((amt)=>console.log(`hy ${amt}`))
// .catch(()=>console.log("hello"))

// function success(){
//     console.log("hy")
// }

// function failure(){
//     console.log("hello")
// }




// let reachA = new Promise((resolve,reject)=>{
//         const reached =true
//         if (reached)
//              setTimeout(resolve, 4000, "vidhya reached" )
//         else 
//         setTimeout( reject,3000,"vidhya not reached"  ) 
//     })
    
//     let reachB = new Promise((resolve,reject)=>{
//         const reached = true
//         if (reached)
//              setTimeout(resolve, 3000, "Guddo reached" )
//         else 
//         setTimeout( reject,3000,"Guddo not reached"  ) 
//     })
    
//     let reachC = new Promise((resolve,reject)=>{
//         const reached = false
//         if (reached)
//              setTimeout(resolve, 1000, "vasu reached" )
//         else 
//              reject("vasu not reached" ) 
//     }) 
    
//     Promise.race([reachA,reachB,reachC])
//     .then((message)=> console.log(message))
//     .catch((message)=> console.log(message))
   

const x=5;
if(true){
    let x=10;
    setTimeout(() => console.log(x), 5000);

    console.log(x);
}
console.log(x);