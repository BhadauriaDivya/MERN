import React, {useEffect, useState} from 'react'

const Counter = (props) => {
    const {counter,decrement,increment,deleteCounter}=props;
    console.log(counter);
    // const [count,setCount]=useState(0);  
    const checkValue=()=>{
        return counter.count===0?"Zero":counter.count;
    };
    const checkCounter=()=>{
        return counter.count===0?"bg-danger mx-2 mt-2 p-2 pt-1 pb-2 rounded text-white":"bg-warning mx-2 mt-2 p-2 rounded";
    };

    // // const decrement=()=>{
    // //     setCount(count-1,()=>{
    // //         console.log(count);            
    // //     });
    // // }
    // // const increment=()=>{
    // //     setCount(count+1,()=>{
    // //         console.log(count);
    // //     });
    // // }

    // const decrement=()=>{
    //     if(count>0){
    //     setCount(count-1)
    //     }
    // };
    // const increment=()=>{
    //     setCount(count+1)
    // };
    // useEffect(()=>{console.log(count)},[count]);
    //let count=0;
    
    return (
      <div className='container mt-3'>
          <button className='btn btn-primary' onClick={()=>decrement(counter)}>Decrement</button>
         <span className={checkCounter()}>{checkValue()}</span>
          <button className='btn btn-primary me-2' onClick={()=>increment(counter)}>Increment</button>
          <button className='btn btn-outline-danger' onClick={()=>deleteCounter(counter)}>Delete</button>
    </div>
  )
}

export default Counter