import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <>

      <div className="item">
        <Link to={`/product/${product.id}`}>
       <img onClick={window.scrollTo(0,0)} src={product.image} alt="" />
       </Link>
        <p>{product.name}</p>
     
      <div className="item-prices">
        <div className="new-prices">${product.new_price}</div>
        <div className="old-prices">${product.old_price}</div>
      </div>
      </div>
    </>
  );
}

export default Item;
