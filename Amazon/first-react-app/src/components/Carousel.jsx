import React from 'react'

const Carousel = () => {
  return (
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
    <div className="carousel-item carou active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRSJune24/GW/BTF/CMLmen/unrec_pc_wrs_event._CB556427452_.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item carou">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/updated/Makeup_PC._CB556364922_.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item carou">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/updated/SKincare_PC._CB556364922_.jpg" className="d-block w-100" alt="..."/>
    </div>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel