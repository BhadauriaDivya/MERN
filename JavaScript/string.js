let hobbies='   coding reading running';
console.log(hobbies);

function sum(a, b, c){
    return a + b + c;
}

let sum = function(a, b, c){
    return a + b + c;
}


//Arrow function

// { function() } == { ()=> }

let sum=(a,b,c)=>{
    return a+b+c;
}
console.log(sum(1,2,3));

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