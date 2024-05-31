import React from 'react'

const Design = () => {
  return (
    <div className='d-flex col-12'>
        <div className='col-3 lblock d-flex flex-column p-5'>
        <h4>MURADNAGAR</h4>
        <h1>31°</h1>
        <span>Clear</span>
        <span>H:39° L:25°</span>

        </div>
        <div className='col-9 rblock d-flex flex-column p-5'>
        <h1>Clear sky</h1>
        <span>latitude: 40.7128</span>
        <span>longitude: -74.006</span>
        </div>
    </div>
  )
}

export default Design