import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item  d-flex carou">
        <img src='.\src\assets\img1.png'/>
        <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL320_.jpg" className="d-block me-5 imgf" />
        <img src="https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_UL320_.jpg" className="d-block ms-5 imgs"/>
      </div>
      <div className="carousel-item d-flex">
      <img src='.\src\assets\img1.png'/>
        <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL320_.jpg" className="d-block me-5 imgf" />
        <img src="https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_UL320_.jpg" className="d-block ms-5 imgs"/>

      </div>
      <div className="carousel-item d-flex">
      <img src='.\src\assets\img1.png'/>
        <img src="https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL320_.jpg" className="d-block me-5 imgf" />
        <img src="https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_UL320_.jpg" className="d-block ms-5 imgs"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel