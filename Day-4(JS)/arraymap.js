let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);

value.map(item=>console.log(`Value X 10 = ${item*10}`));
console.log(value);

//do multiply

let sumValue=value.reduce((a,b)=>a+b);
console.log(`Sum of Array Value=${sumValue}`);

let evenNum=value.filter(item=>item%2===0);
console.log(evenNum);