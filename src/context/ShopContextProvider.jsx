import React, { createContext, useState } from "react";

import all_product from "../components/Assests/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart ;
}


const ShopContextProvider = (props)=>{


 const [cartItems,setCartItems] = useState(getDefaultCart());
    

//    console.log(cartItems)

    const addToCart = (itemId)=>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const RemoveFromCart = (itemId)=>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const getTotalCartItems =()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
                {
                    totalItem+=cartItems[item];
                }
        }
        return totalItem;
    }

    const contextValue = {all_product,cartItems,addToCart,RemoveFromCart,getTotalCartItems}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider ;