import React, { useState } from 'react'

// const UseStateEx=()=>{
//     const [name,setName] =useState("KIET");
//     const changeName=()=>{
//         setName("KIET MCA");
//         console.log(name);
//     };

const UseStateEx=()=>{
    const [userInfo,setUserInfo] =useState({name:"KIET",class:"MCA"});
    //-----
    const [counter,setCounter]=useState(0);

    //-----

    const changeName=()=>{
        // setUserInfo({name:"KIET MCA"});
        setUserInfo({...userInfo, name:"KIET MCA"});   //Spread Operator
        console.log(userInfo.name);
    };

    return (
    <div>
        {/* <h1>Name:{name}</h1> */}
        <h1>Name:{userInfo.name}</h1>
        <h1>Class:{userInfo.class}</h1>
        <button className='btn btn-primary' onClick={changeName}>Change Name</button>
        <h2>Counter:{counter}</h2>
        <button 
        className='btn btn-primary' 
            onClick={()=>{
                setCounter((prevCounter)=>prevCounter+1);
                setCounter((prevCounter)=>prevCounter+1);
                setCounter((prevCounter)=>prevCounter+1);

                // setCounter(counter+1);
                // setCounter(counter+1);     individual rendring
                // setCounter(counter+1);     all three counter will hove 0 value so it witll not increse 3
            }}
        >
            {/* Increment Counter */}
            Increment Counter +3
        </button>
        {/* <button className='btn btn-primary' onClick={changeName}>Decrement Counter</button> */}
    </div>
  )
}

export default UseStateEx