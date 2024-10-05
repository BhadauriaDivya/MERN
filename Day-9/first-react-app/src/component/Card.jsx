import React from 'react'           //rafce

const Card = (props) => {
    const {title,description,price,brand,category,thumbnail}=props;
  return (
        <div className="card m-4" style={{width: "20rem",height:"28rem"}}>
            <img
            src={thumbnail}
            className="card-img-top "
            height={"200rem"}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text overflow-auto">{description}</p>
            
            <div className='d-flex flex-row justify-content-between'>
                <div>Price: {price} Rs</div>
                <div>Brand: {brand}</div>
                <div>Category: {category}</div>
            </div>
        </div>
    </div>
  );
};
export default Card