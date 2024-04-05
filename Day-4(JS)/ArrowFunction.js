// { function() } == { ()=> }


const msg1=()=>{
    console.log("Welcome to arrow function");
}
msg1();

const sum=(num1,num2)=>console.log("Sum=",(num1+num2));
sum(23,56);

const mul=(num1,num2)=>num1*num2;
console.log("Multiply=",mul(23,56));

const mult=(num1,num2)=>{
    return num1*num2;
}
console.log("Multiply=",mult(23,56));

//React

// const msg2=()=>(
// console.log("Welcome to arrow function");
//      console.log("Welcome to arrow function again");
// )
// msg2();

