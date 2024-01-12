import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='forms' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search' className='absolute -left-96'>Search item</label>
        <input type='text' id='search' role="searchbox" placeholder='Search items' required className='ip' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        {/* <button type='submit' aria-label='Search item' className="btn">Search</button> */}
    </form>
  )
}

export default SearchItem