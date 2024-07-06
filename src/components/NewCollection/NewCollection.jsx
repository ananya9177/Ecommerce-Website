import React from 'react'
import './NewCollection.css'
import new_collection from '../Assests/new_collections'
import Item from '../Item/Item'

function NewCollection(props) {
  return (
   <>
   <div className="new-collection">
    <h2>NEW COLLECTION</h2>
    <hr />
    <div className="collections">

        {
            new_collection.map((item)=>{
               return <Item product={item}/>
            })
        }

    </div>
   </div>
   </>
  )
}

export default NewCollection
