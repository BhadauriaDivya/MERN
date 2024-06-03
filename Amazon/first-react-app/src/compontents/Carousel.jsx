import React from 'react'

const Carousel = () => {
  return (
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item carou active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/WRSJune24/GW/BTF/CMLmen/unrec_pc_wrs_event._CB556427452_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item carou">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/updated/Makeup_PC._CB556364922_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item carou">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/updated/SKincare_PC._CB556364922_.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel