import React from 'react'
import LineItems from './LineItems'


const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul className="border-4 border-fuchsia-500 w-full list-none pt-0 pr-1/4 pb-1/4 ">
    {items.map((item)=>
        <LineItems 
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
    
    )}
  </ul>
    
  )
}

export default ItemsList