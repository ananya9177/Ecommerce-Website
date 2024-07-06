 import React, { useContext } from 'react'
import './CSS/ShopCategory.css'

import  { ShopContext } from '../context/ShopContextProvider'
import dropdown_icon from '../components/Assests/dropdown_icon.png'
import Item from '../components/Item/Item'


function ShopCategory(props) {

   const {all_product} = useContext(ShopContext )
  return (
    <div className='shop-category'>

      <img className='shopcategory-banner' src={props.banner} alt="" />
      
      <div className="shopcategory-IndexSort">
        <p>
        <span><b>Showing 1-12</b> </span> out of 36
        </p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      </div>

      <div className="shopcategory-products">
        {
          all_product.map((item,i)=>{

            if(props.category === item.category){
              return <Item product={item}/>
            }
            else{
              return null;
            }

          })
        }
      </div>

      <div className="more">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory
