let arr=[23,45,32,54,19,54,6,34];
let a=arr[0];
for(let index of arr){
    a=Math.min(a,index)
}
console.log(a);
