const msg=()=>console.log("Arrow Function");
let data=[10,20,50,60.56,70.2,'kiet',msg];
console.log(data);
data[6]();

//for

//for(let i=0;i<data.length;i++){
//    console.log(`Value of ${i} is ${data[i]}`);//}

// for in

//for(let index in data){
//    console.log(`Value of ${index} is ${data[index]}`);    
//}

//for of

//for(let value of data){
//    console.log(`Value of Array= ${value}`);
//}

//forEach (it is faster than other used in react)

data.forEach(value=>console.log(`Value of Array= ${value}`));