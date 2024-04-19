const data=[10,20,30,40];
//simple way

// let x=data[0];
// let y=data[1];
// let z=data[2];
// let w=data[3];
// console.log(x,y,z,w);

//destructuring

let[x,y,z,w]=data;
console.log(x,y,z,w);

const studentInfo={
    name:"Divya",
    course:"mca",
    rollno:1
}

// let{name,course,rollno}=studentInfo;
// console.log(name,course,rollno);
let{name:sname,course:mycourse,rollno:rno}=studentInfo;
console.log(sname,mycourse,rno);