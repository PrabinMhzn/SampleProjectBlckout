import {Link, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import OurWorks from './Pages/OurWorks'
import Services from './Pages/Services'
import Workshops from './Pages/Workshops'
import ContactUs from './Pages/ContactUs'
import NotFoundPage from './Pages/NotFoundPage'







function App(){

    return (
    <>
    <div className='p-11 bg-gradient-to-b from-slate-600 to-black text-white justify-center items-center'>
    <nav className='hidden sm:block '>
        <ul className='flex px-8 gap-20 justify-center items-center'>
            <li className='hover:scale-125 duration-200'>
                <Link to="/">Home</Link>

            </li>
            <li className='hover:scale-125 duration-200 hover:text-teal-300'>
               
                <Link to="/aboutus"> About Us</Link>

            </li>
            <li className='hover:scale-125 duration-200'>
                <Link to="/ourworks"> Our Works</Link>

            </li>
            <li className='hover:scale-125 duration-200'>
                <Link to="/services"> Our Services</Link>

            </li>
            <li className='hover:scale-125 duration-200'>
                <Link to="/contactus"> Contact Us</Link>

            </li>
           
        </ul>
        
    </nav>

    </div>
    
     <Routes>
       
        <Route path = "/" element = {<Home />}/>
        <Route path = "/home" element = {<Home />}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/ourworks' element={<OurWorks/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Workshops' element={<Workshops/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        
       
        
    </Routes>


   
    </>
   )
}

export default App