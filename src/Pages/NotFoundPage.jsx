import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className=' absolute  flex flex-col p-8
      items-center gap-5 bg-red-400 h-screen w-screen  '>
     <h1 className='text-6xl'>404 Not Found</h1> 

     
     <Link to= "/" className='font-black bg-slate-400 rounded-full px-3 py-2'>Go back</Link> 
     
     
     
     
     {/* Links back to home without refreshing the page  can use <a href as well  but it refreshes the whole page and everything is loaded again */}

     

      
    </div>
   
    
  )
}

export default NotFoundPage
