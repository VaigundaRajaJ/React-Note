import React from 'react'

const Header = (pro) => {
 
  return (
    <header className='bg-blue-500 py-4 w-full text-white flex justify-center items-center'>
      <h1>{pro.title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title:"To do List"
}

export default Header