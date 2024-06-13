import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'


const Card = () => {
  const [counter,setCounter]=useState(0);
  return (
    <div>
    <div className='d-flex'>
      {/* first */}
          <div className="card card1 border border-2 rounded-0 ms-2 ps-2 py-3" >
        <p className='fs-4'><b>Appliances for your home | Up to 55% off</b></p>
        <div className='d-flex'>
          <div className='lh-1 m-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" className="cardimg" />
            <p>Air Conditioners</p>
          </div>
          <div className='lh-1 m-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg" className="cardimg" />
            <p>Refrigerators</p>
          </div>
        </div>
        <br/>
        <div className='d-flex'>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg" className="cardimg" />
          <p>Microwaves</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" className="cardimg" />
          <p>Washing machines</p>
          </div>
        </div>     
    </div>
    
    {/* second */}
    <div className="card card1 border border-2 rounded-0 ms-2 ps-2 py-3" >
        <p className='fs-4'><b>Revamp your home in style </b></p>
        <div className='d-flex '>
          <div className='lh-1 m-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_furnishings_2._SY232_CB584596691_.jpg" className="cardimg" />
            <p>Cushion covers, bedsheets & more</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_decor_1._SY232_CB584596691_.jpgg" className="cardimg" />
          <p>Figurines, vases and more</p>
          </div>
        </div>
        <br/>
        <div className='d-flex'>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_storage_1._SY232_CB584596691_.jpg" className="cardimg" />
          <p>Home storage</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_lighting_2._SY232_CB584596691_.jpg" className="cardimg" />
          <p>Lighting solutions</p>
          </div>
        </div>        
    </div>

    {/* third */}
    <div className="card card1 border border-2 rounded-0 ms-2 ps-2 py-3" >
        <p className='fs-4'><b>Starting ₹99 | Amazon Brands & more </b></p>
        <div className='d-flex '>
          <div className='lh-1 m-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_week19_372001._SY232_CB557385001_.jpg" className="cardimg" />
            <p>Starting ₹179 | Home decor</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_PC_372x232_6_PB._SY232_CB560726550_.jpg" className="cardimg" />
          <p>Up to 60% off | Storage & racks</p>
          </div>
        </div>
        <br/>
        <div className='d-flex'>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_PC_186x116_7_PB._SY232_CB560732407_.jpg" className="cardimg" />
          <p>Starting ₹99 | Toys & games</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/PC_QC/2x_spb._SY232_CB580758260_.png" className="cardimg" />
          <p>Up to 60% off | Jackets, dresses & more </p>
          </div>
        </div>        
    </div>
    
    {/* fourth */}
    <div className="card card1 border border-2 rounded-0 ms-2 ps-2 py-3" >
        <p className='fs-4'><b>Automotive essentials | Up to 60% off</b></p>
        <div className='d-flex '>
          <div className='lh-1 m-2'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg" className="cardimg" />
            <p>Cleaning accessories</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg" className="cardimg" />
          <p>Tyre & rim care</p>
          </div>
        </div>
        <br/>
        <div className='d-flex'>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg" className="cardimg" />
          <p>Helmets</p>
          </div>
          <div className='lh-1 m-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg" className="cardimg" />
          <p>Vacuum cleaner</p>
          </div>
        </div>        
      </div>
    </div>
    <div>
    <div className="card card2 border border-2 rounded-0 ms-2 mt-4" >
      <div className='mt-3 ms-3 '><b>Min. 30% off | Top deals in home decor products from Small businesses</b></div>
        <div className='d-flex m-2'>
            <img src="https://m.media-amazon.com/images/I/71uB4BEEx-L._AC_SY400_.jpg" className="cardimg2" />
              {/* <span className='btn btn-primary count' onClick={()=>{setCounter(counter+1)}}>
                Add to card
              </span> */}
            <img src="https://m.media-amazon.com/images/I/91s7rC+IDBL._AC_SY400_.jpg" className="cardimg2" />
              
            <img src="https://m.media-amazon.com/images/I/71Eugcj1NFL._AC_SY400_.jpg" className="cardimg2" />
              
            <img src="https://m.media-amazon.com/images/I/718DSiX9NLL._AC_SY400_.jpg" className="cardimg2" />

            <img src="https://m.media-amazon.com/images/I/71Xwn1AUQdL._AC_SY400_.jpg" className="cardimg2" />

         <img src="https://m.media-amazon.com/images/I/718Sll+V5pL._AC_SY400_.jpg" className="cardimg2" />
        </div>        
      </div>
    </div>
    </div>
  )
}

export default Card