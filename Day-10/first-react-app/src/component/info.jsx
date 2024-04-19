import React from 'react'

const Info = (props) => {
    let{lang}=props;
  return (
    <div>
        <h1>Top Programming Languages</h1>
        {lang.map((item,index)=>(
            // <li key={index}>{item}</li>
            <li key={item.id}>{item.name}</li>
        ))}
    </div>
  )
}

export default Info