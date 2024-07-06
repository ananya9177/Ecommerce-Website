// import React from 'react'
// import './ProductDisplay.css'
// import star_icon from '../Assests/star_icon.png'
// import star_dull_icon from '../Assests/star_dull_icon.png'

// function ProductDisplay(props) {
//     const {product} =props;
//   return (
//     <>
//     <div className="productdisplay">
//         <div className="productdisplay-left">
//             <div className="productdisplay-img-list">
//                 <img src={product.image} alt="" />
//                 <img src={product.image} alt="" />
//                 <img src={product.image} alt="" />
//                 <img src={product.image} alt="" />
//             </div>
//             <div className="productdisplay-img">
//                 <img className='productdisplay-main-img' src={product.image} alt="" />
//             </div>
//         </div>
//         <div className="productdisplayright">

//             <h1>{product.name}</h1>
//             <div className="productdisplay-right-star">
//             <img src={star_icon} alt="" />
//             <img src={star_icon} alt="" />
//             <img src={star_icon} alt="" />
//             <img src={star_icon} alt="" />
//             <img src={star_dull_icon} alt="" />
//             <p>(122)</p>
//             </div>
//         <div className="productdisplay-right-prices">
//             <div className="oldprice">
//                 ${product.old_price}
//             </div>
//             <div className="newprice">
//                 ${product.new_price}
//             </div>
//         </div>
//         {/* <div className="productdisplay-right-description">
//             dhfsdcdsfaodjnsbcbda;ebdncxsdkjc;pefjrhfrfhds.c
//             bdcad;udscjdsncdlfd
//         </div> */}
//         <div className="productdisplay-right-size">
           
//         <div>S</div>
//         <div>M</div>
//         <div>L</div>
//         <div>XL</div>
//         <div>XLL</div>
//         </div>
//         </div>

//         <div className="button">
//         <button>ADD TO CART</button>
//         {/* <p className='productdisplay-right-category'> <span>Category:</span>Women,T-SHIRT, Crop Top</p> */}
       
//     </div>
//         </div>
        
       
        
   
//     </>
//   )
// }

// export default ProductDisplay


import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContextProvider';

function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} =useContext(ShopContext)
  return (
    <>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplayright">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="oldprice">${product.old_price}</div>
            <div className="newprice">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            {product.description}
          </div>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={()=>{
            addToCart(product.id)
          }}>ADD TO CART</button>
          {/* <p className='productdisplay-right-category'> <span>Category:</span>Women,T-SHIRT, Crop Top</p> */}
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
