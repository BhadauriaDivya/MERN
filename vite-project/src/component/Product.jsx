import React from "react";

const Product = (props) => {
  const { title, description, price, images} = props;
  return (
    // <div className="card m-4" style={{ width: "20rem", height: "28rem" }}>
    //   <img src={image} className="card-img-top " height={"200rem"} />
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p className="card-text overflow-auto">{description}</p>
    //     <div className="d-flex flex-row justify-content-between">
    //       <div>Price: {price} Rs</div>
    //     </div>
    //   </div>
    // </div>
    
    <div className="d-flex flex-column m-1 p-2" style={{ width: "17rem" }}>
      <img src={props.images} className="card-img-top " height={"230rem"} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="d-flex flex-row justify-content-between">
          <div>Price: {props.price} Rs</div>
        </div>
      </div>
    </div>
        //   <Card className='d-flex flex-column m-1 p-2' style={{  height: 'auto'}}>
        //     <Card.Img className='rounded' variant="top" src={props.images} style={{ height: 'auto'}} />
        //     <Card.Body>
        //       <Card.Title>{props.title}</Card.Title>
        //       <Card.Text>{props.description}</Card.Text>
        //       <div className='d-flex flex-column justify-content-end'>
        //         <p>Price: {props.price} $</p>
        //         <Button variant="primary">BUY!</Button>
        //       </div>
        //     </Card.Body>
        //   </Card>
        );
      };

export default Product;