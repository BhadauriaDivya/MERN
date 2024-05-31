import React, { useState , useEffect } from 'react'
import Card from './Card'

const MyCard = () => {
    const [products,setProducts]=useState([]);
    //     {id:1,
    //     title:"iPhone 9",
    //     description:"An apple mobile which is nothing like apple",
    //     price:549,
    //     discountPercentage:12.96,
    //     rating:4.69,
    //     stock:94,
    //     brand:"Apple",
    //     category:"smartphones",
    //     thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    //     images:["https://cdn.dummyjson.com/product-images/1/1.jpg",
    //               "https://cdn.dummyjson.com/product-images/1/2.jpg",
    //               "https://cdn.dummyjson.com/product-images/1/3.jpg",
    //               "https://cdn.dummyjson.com/product-images/1/4.jpg",
    //               "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
    //     }
    // ]);
    useEffect(()=>{
        // const productInfo=fetch("https://dummyjson.com/products")
        fetch("https://dummyjson.com/products")
        .then((results)=>results.json())
        .then((data)=>{
            setProducts(data.products)
        })
    },[]);
  return (
    <div className='container d-flex flex-wrap'>
            {products.map(products=>(
            <Card
            key={products.id}
            // id={products.id}
            title={products.title}
            description={products.description}
            price={products.price}
            brand={products.brand}
            category={products.category}
            thumbnail={products.thumbnail}
            />
        ))} 
    </div>
  )
}
export default MyCard