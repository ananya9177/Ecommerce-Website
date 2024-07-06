// // import React, { useContext } from 'react'
// // import './Cartitems.css'
// // import { ShopContext } from '../../context/ShopContextProvider'
// // import remove_icon from '../Assests/cart_cross_icon.png'
// // function Cartitems() {

// //     const {all_product,cartItems,RemoveFromCart} = useContext(ShopContext)
// //   return (
// //    <>
// //    <div className="cart-items">

// //     <div className="cartitems-format-main">
// //         <p>Products</p>
// //         <p>Title</p>
// //         <p>Price</p>
// //         <p>Quantity</p>
// //         <p>Total</p>
// //         <p>Remove</p>
// //     </div>
// //     <hr />
// //     {all_product.map((e)=>{
// //     if(cartItems[e.id]>0){
// //         return 
// //         <div>
// //             <div className="cartitems-format">
// //             <img className='carticon-product-icon' src={e.image} alt="" />
// //             <p>{e.name}</p>
// //             <p>${e.new_price}</p>
// //             <button className='cartitems-quantity'>{cartItems[e.id]}</button>
// //             <p>{e.new_price*cartItems[e.id]}</p>
// //             <img src={remove_icon} onClick={()=>{
// //                 RemoveFromCart(e.id)
// //             }} alt="" />
// //         </div>
// //         <hr />
// //     </div>

// //     }
// // })}
    
// //    </div>
// //    </>
// //   )
// // }

// // export default Cartitems


// import React, { useContext } from 'react';
// import './Cartitems.css';
// import { ShopContext } from '../../context/ShopContextProvider';
// import remove_icon from '../Assests/cart_cross_icon.png';

// function Cartitems() {
//   const { all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

//   return (
//     <>
//       <div className="cart-items">
//         <div className="cartitems-format-main">
//           <p>Products</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <hr />
//         {all_product.map((e) => {
//           if (cartItems[e.id] > 0) {
//             return (
//               <div key={e.id}>
//                 <div className="cartitems-format">
//                   <img className='carticon-product-icon' src={e.image} alt={e.name} />
//                   <p>{e.name}</p>
//                   <p>${e.new_price}</p>
//                   <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                   <p>${e.new_price * cartItems[e.id]}</p>
//                   <img
//                     src={remove_icon}
//                     onClick={() => {
//                       RemoveFromCart(e.id);
//                     }}
//                     alt="Remove"
//                     className='cartitems-remove-icon'
//                   />
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//           return null;
//         })}
//         <div className="cartitems-down">
//             <div className="cartitems-total">
//                 <h1>Cart Totals</h1>
//                 <div>
//                     <div className="cartitems-total-item">
//                         <p>SubTotal</p>
//                         <p>${0}</p>
//                     </div>
//                     <hr />
//                     <div className='cartitems-total-item'>
//                         <p>Shipping Fee</p>
//                         <p>Free</p>
//                     </div>
//                     <hr />
//                     <div className='cartitems-total-item'>
//                         <h2>Total</h2>
//                         <h3>${0}</h3>
//                     </div>
//                 </div>
//                 <button>Proceed to Checkout</button>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cartitems;

import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../context/ShopContextProvider';
import remove_icon from '../Assests/cart_cross_icon.png';

function Cartitems() {
  const { all_product, cartItems, RemoveFromCart } = useContext(ShopContext);

  const calculateTotal = () => {
    return all_product.reduce((total, product) => {
      const quantity = cartItems[product.id];
      if (quantity > 0) {
        return total + product.new_price * quantity;
      }
      return total;
    }, 0).toFixed(2); // Using toFixed(2) to format to 2 decimal places
  };

  const subtotal = calculateTotal();

  return (
    <>
      <div className="cart-items">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format">
                  <img className='carticon-product-icon' src={e.image} alt={e.name} />
                  <p>{e.name}</p>
                  <p>${e.new_price.toFixed(2)}</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                  <img
                    src={remove_icon}
                    onClick={() => {
                      RemoveFromCart(e.id);
                    }}
                    alt="Remove"
                    className='cartitems-remove-icon'
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>SubTotal</p>
                <p>${subtotal}</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className='cartitems-total-item'>
                <h2>Total</h2>
                <h3>${subtotal}</h3>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitems;
