import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const [name,setName] = useState("KIET");                  //UseEffect function tb call hoga jb bhi koi change ho jaise idhar name change ho rha hai 
    const [course, setCourse] = useState("B.Tech"); 
    const changeName=()=>{
        setName("KIET MCA");
    };
    const changeCourse=()=>{
        setCourse("MCA");
    };

    useEffect(()=>{
        console.log("use Effect hook");
    },[]);

    useEffect(()=>{
        console.log(name);
    },[name]);

    useEffect(()=>{
        console.log("use Effect hook Course");
    },[course]);
  return (
    <div>
        <h1>UseEffect Example</h1>
        <h2>Name:{name}</h2>
        <button className='btn btn-danger' onClick={changeName}>Refresh</button>
        <h2>Course:{course}</h2>
        <button className='btn btn-danger' onClick={changeCourse}>Refresh</button>
    </div>
  )
}

export default UseEffectEx