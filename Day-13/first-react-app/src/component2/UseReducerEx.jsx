import React, { useReducer } from 'react'

const UseReducerEx = () => {
    
    //// const initcolor="#000000"
    
    const initstate={color:"#000000",size:"40px"};          //complex State
    
    //// const reducer=(color,action)=>{
    
    const reducer=(state,action)=>{
        switch(action){    
            //// case "red": return color="#ff0000";
            //// case "green": return color="#00ff00";
            //// case "blue": return color="#0000ff";
            //// default: return color;

            case "red": return {...state, color:"#ff0000"};
            case "green": return {...state, color:"#00ff00"};
            case "blue": return {...state, color:"#0000ff"};
            case "50px": return {...state, size:"50px"}
            default: return state;
        }
    };

    //// const [color,dispatch]=useReducer(reducer,initcolor);
    
    const [state,dispatch]=useReducer(reducer,initstate); 
                        //reducer--> jo action perforn krega
                        //initcolor-->initial color
                        //to change color give color in dispatch
                        //state=color
                        //useRender is use for Complex state management
                        
return (
        // Alternative of UseState when the data is large
        
        <div>
        <h1>UseReducer Example</h1>
        
        {/* //// <h2 style={{color:color}}>MCA REACT Classes</h2> //// */}

        <h2 style={{color:state.color,fontSize:state.size}}>MCA REACT Classes</h2>
        <button className='btn btn-primary m-2' onClick={()=>dispatch("red")}>RED</button>
        <button className='btn btn-primary m-2' onClick={()=>dispatch("green")}>GREEN</button>
        <button className='btn btn-primary m-2' onClick={()=>dispatch("blue")}>BLUE</button>

        {/* /////////////////////////////////////////////////////////////////////////////// */}
        
        <button className='btn btn-primary m-2' onClick={()=>dispatch("50px")}>50px</button>
        </div>
  )
}

export default UseReducerEx