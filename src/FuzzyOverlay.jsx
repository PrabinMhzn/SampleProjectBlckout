import React from 'react'
import { motion} from 'framer-motion'



const FuzzyOverlay = () => {
  return (
    <div className='relative overflow-hidden'>
        <Content/>
        <BgAnimation/>
      
    </div>
  )
}
 

export default FuzzyOverlay

export const BgAnimation = () => {
  return (
    
        <motion.div 
    initial={{ transform: "translateX(-10%) translateY(-10%)"}}
    animate= {{ transform: "translateX(10%) translateY(10%)"}}
    transition={{ 
        repeat:Infinity,
        duration: 0.2,
        ease:"linear",
        repeatType: "mirror"
    }}

    style={{
        backgroundImage: 'URL("/src/assets/noise.png")',
    }}
    
    className=' pointer-events-none absolute -inset-[100%] opacity-[15%]'
    />

   
    
  )
}


const Content = () => {
    return(

    <div className=' flex flex-col place-content-center  bg-neutral-700 h-screen '>
       
        <div className='bg-neutral-900 h-screen m-11'>
        <div className='pt-8' ><p className='text-center text-6xl font-black uppercase text-neutral-100 '>
            Blockout
            </p>
            <p className='text-center justify-center gap-3 text-neutral-400 text-xl pb-4'> From Around the Block</p>
             <div className=' flex items-center justify-center gap-3'>
            <button className=' w-fit px-2 py-2 font-semibold text-neutral-300 transition-colors hover:bg-neutral-600 rounded-full upper'>Coming Soon</button>
                </div>
             
             </div> 
            
             
        
             

   

        

        </div> 
        
        
        
       
        
    </div>
    )
}

