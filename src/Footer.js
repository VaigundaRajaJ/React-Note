import React from 'react'

const Footer = ({length}) => {
   
  return (
    <footer className="w-full py-4 bg-blue-500 text-white grid place-content-center">
        <p className=''>You have {length} {length>1 ? "list items" : 
        "list item"}</p>
    </footer>
  )
}

export default Footer