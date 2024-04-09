//rest parameters
const sum=(num1=0,num2=0,...num)=>{
    let s=0
    if(num.length>0){
        s=num.reduce((a,b)=>a+b);
    }
    console.log("Sum of numbers=",(num1+num2+s));
}
sum(12,34,43,23,54,56,32,46);
sum(30);
sum();