import React from 'react'

const Message = () => {                                     //It is called rendering
    let name = "React JS";
  return (
    <div>
        <h1>Welcome to {name}</h1>
    </div>
  )
}

const Display = () => {
  return (
    <div>
        <h1>Welcome to React JS under Display</h1>
    </div>
  )
}

export default Message
export {Display}