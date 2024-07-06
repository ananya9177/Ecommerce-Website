// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContextProvider'
// import {useParams} from 'react-router-dom'
// import Breadcrum from '../components/Breadcrums/Breadcrum';
// function Product() {

//   const {all_product} = useContext(ShopContext)
//   const {productId} = useParams();
//   const product = all_product.find((e)=>{
//     e.id===Number(productId)
//   })
//   return (
//     <>
//     <Breadcrum product={product}/>
//     </>
//   )
// }

// export default Product

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextProvider';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Correctly use the `find` method to return the product
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <RelatedProducts/>
    </>
  );
}

export default Product;
