import React from 'react'
import {FaTrashAlt} from "react-icons/fa";

const LineItems = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='list1' key={item.id}>
           <input type="checkbox" checked={item.checked} className="input1" onChange={() => handleCheck(item.id)}/>
           <label className='text-xl grow' onDoubleClick={() => handleCheck(item.id)} style={(item.checked)?{textDecoration:'line-through'}:null}>{item.item}</label>
           <FaTrashAlt role="button" tabIndex="0" className="button1" onClick={() => handleDelete(item.id)} aria-label = {`Delete ${item.item}`}/>
           
    </li>
    
  )
}

export default LineItems