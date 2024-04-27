import React,{ useState } from 'react'
import {Link} from 'react-dom'



const NavBar = () => {
  const [nav, setNav] = useState(false);
 


  const links = [
        
    {
      id: 2,
      link: 'About Us'
    },

    {
      id: 3,
      link: 'Our Works'
    },

    {
      id: 4,
      link: 'Services'
    },
    {
      id: 5,
      link: 'Workshops'
    },
    {
      id: 5,
      link: 'Contact Us'
    },
  ]

  return (
    <div className='p-8 bg-black'>
      <div className='flex flex-col  w-full h-30 p-4 text-white justify-center items-center'>

<div>
  <ul className='hidden md:flex '>
    {links.map(({id, link})=>
  (
   
    <li 
    key={id}
    className='px-8 cursor-pointer capitalize font-medium hover:scale-125 duration-300'
     >
         {link}
    </li>
    
  )
  )}
  </ul>
</div>


</div>

    </div>
    
  )
}

export default NavBar
