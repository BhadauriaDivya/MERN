const year=(y)=>{
    console.log((y % 400 == 0 && y % 100 == 0 || y % 4 == 0)?"leap year":"not leap year");
}
year(2012);