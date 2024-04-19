let a=5;
const fib=(i)=>{
    if(i<=1){
        return i;
    }
    return fib(i-1)+fib(i-2);
}
for(let i=0;i<a;i++){
    let num=0;
    num+=fib(i)
    console.log(num);
}