import React, { useState , useEffect } from 'react'
import Product from './Product';
// import CardProduct from './CardProduct';

// const MyProduct = () => {
//     const [products,setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.escuelajs.co/api/v1/products")
    //     .then((results)=>results.json())
    //     .then((data)=>{
    //         setProducts(data.products)
    //     })
    // },[]);
    // useEffect(() => {
    //     fetch("https://api.escuelajs.co/api/v1/products")
    //          .then(res => res.json())
    //          .then(data => setProducts(data))
    //   }, [])
    const Products = () => {
      const url = 'https://api.escuelajs.co/api/v1/products';
      const [products, setProducts] = useState([]);
    
      const getDataProducts = async () => {
        const response = await fetch(url);
        const dataProducts = await response.json();
        setProducts(dataProducts);
      };
    
      useEffect(() => {
        getDataProducts();
      });
    
      return (
        <div className='container d-flex flex-wrap'>
          <div className='row'>
            {products.map( (products) => {
              return (
                  <Product
                  key={products.id} 
                  title={products.title} 
                  price={products.price} 
                  description={products.description} 
                  images={products.images} />
                )}
              )
            }
            
          </div>
        </div>
      );
    };
    
    
    // return (
    //   <div className='container d-flex flex-wrap'>
    //           {products.map(products=>(
    //           <Product
    //           key={products.id}
    //           title={products.title}
    //           description={products.description}
    //           price={products.price}
    //           image={products.image}
    //           />
    //       ))} 
    //   </div>
    // )

export default Products