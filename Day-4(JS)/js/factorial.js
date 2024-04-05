let a=3;
const fact=(i)=>{
    if (i===0)
        return 1;
    if(i===1)
        return 1;
    return i*fact(i-1);
}
console.log("Factorial is=",fact(a));