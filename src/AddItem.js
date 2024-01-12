import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from "react";

const AddItem = ({newItem, setnewItem, handleSubmit}) => {


  const inputRef = useRef()


  return (
    <form className='forms' onSubmit={handleSubmit}>
        <label htmlFor='add' className='absolute -left-96'>Add item</label>
        <input ref={inputRef} type='text' id='add' autoFocus placeholder='Add item' required className='ip' value={newItem} onChange={(e)=>setnewItem(e.target.value)}></input>
        <button type='submit' aria-label='Add item' className="btn" onClick={()=>inputRef.current.focus()}> <FaPlus /></button>
    </form>
  )
}

export default AddItem