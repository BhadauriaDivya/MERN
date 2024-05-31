import React from 'react'
import A from './A'

export const nameContext=React.createContext() //Centralize management Space

const UseContextHooksEx = () => {
    return (
        <div>  
        {/* Solution is Centralized state Management  */}
        <h1>UseContext Hooks Example</h1>
        <nameContext.Provider value="KIET">
            <A/>
        </nameContext.Provider>
        {/* <A name="KIET"/> */}
    </div>
  )
}

export default UseContextHooksEx