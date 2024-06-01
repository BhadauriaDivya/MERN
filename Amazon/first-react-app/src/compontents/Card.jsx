import React from 'react'

const Card = () => {
  return (
    <div class="card col-4 pt-2 pb-5 border border-2 ms-3" >
        <p className='text-center fs-5'>Appliances for your home |<br/> Up to 55% off</p>
        <div className='d-flex '>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" class="cardimg m-2" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg" class="cardimg m-2" />
        </div>
        <div className='d-flex'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg" class="cardimg m-2" />
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" class="cardimg m-2" />
        </div>        
    </div>
  )
}

export default Card