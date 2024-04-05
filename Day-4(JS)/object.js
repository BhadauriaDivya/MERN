let studentInfo={
    rollno:1,
    name:"Ravi Kumar",
    course:"MCA",
    college:"KIET",
    marks:[36,34,65,74,65,34],
    music:()=>console.log("Play music"),
    play:function playfun(){console.log("Play Cricket")},
}

let arrayValue=[studentInfo,studentInfo,studentInfo];
arrayValue.forEach(item=>console.log(item.name));

//console.log(studentInfo);
//console.log(studentInfo.name);
//console.log(studentInfo.marks);
//console.log(studentInfo.music());
//console.log(studentInfo.play());
studentInfo.marks.forEach(value=>console.log(`marks= ${value}`));

//rest operator , destructuring..
