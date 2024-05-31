import React, { useContext } from 'react'
import { nameContext } from './UseContextHooksEx'

// const C = (props) => {
const C = () => {
    const name=useContext(nameContext);
return (
    <div>
        <h2>C Component</h2>
        <h2>Name:{name}</h2>
    </div>
  )
}

export default C