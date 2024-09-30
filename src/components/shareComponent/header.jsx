import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const  Header=({sticky,stickyColor})=>{
    const [isSticky, setIsSticky] = useState(false);
// const location = useLocation();

useEffect(() => {
  if (sticky) {
    setIsSticky(true);
  }
}, [sticky]);

useEffect(() => {
  if (stickyColor) {
    setIsSticky(true);
  } else {
    setIsSticky(false);
  }
}, [stickyColor]);


    const[query,setQuery]=useState('');
    const handleSearch =()=>{
        onSearch(query)

    }

  return (
    <div
    className={`bg-gradient-to-r from-black to-gray-400  sticky top-0 shadow-md ${
      isSticky ? "sticky" : ""
    } ${stickyColor ? "sticky-color" : ""}`}
  >
    <div className=''>

        <div className='logo-container '> 
        <Link to="/">
            <img src="/logo.png" alt="logo" className="logo w-12 h-12 rounded-md flex justify-items-center" />
          </Link>     
          </div>     

                    <ul className=' flex items-center justify-center space-x-12 '>
                    <li className=' text-white font-medium hover:text-white transition duration-100 ease-in-out transform hover:scale-125 '><Link to ="/">Home</Link></li>
                    <li className='text-white font-medium hover:text-white transition duration-100 ease-in-out transform hover:scale-125'><Link to="/jobs">Jobs</Link></li>
                    <li className='text-white font-medium hover:text-white transition duration-100 ease-in-out transform hover:scale-125'><Link to="/employer-dashboard">Employer Dashboard</Link></li>
                    <li className='text-white font-medium hover:text-white transition duration-100 ease-in-out transform hover:scale-125'> <Link to="/candidate-dashboard">Candidate Dashboard</Link></li>
                    
                </ul>
                <input type="search" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Search Jobs...' className='rounded-full flex items-center'/>
                    <button onClick={handleSearch}></button>
           </div>
           
      
    

      
    </div>
  )
}


export default Header;