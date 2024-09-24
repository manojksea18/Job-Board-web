import React from 'react'
import { Link } from 'react-router-dom';

const  Header=()=>{
  return (
    <div className='container bg-gradient-to-r from-black to-indigo-400  mt-4  sticky top-0  shadow-lg rounded-md'>
        <div className='logo-container '> 
        <Link to="/">
            <img src="/logo.png" alt="logo" className="logo w-16 h-16 rounded-md text-white flex items-center justify-center" />
          </Link>     
          </div>     

                    <ul className='flex items-center justify-around'>
                    <li className='flex items-cente text-white'><Link to ="/">Home</Link></li>
                    <li className='text-white'><Link to="/jobs">Jobs</Link></li>
                    <li className='text-white flex justify-end'><Link to="/employer-dashboard">Employer Dashboard</Link></li>
                    <li className='text-white flex justify-end'> <Link to="/candidate-dashboard">Candidate Dashboard</Link></li>

                </ul>
           
      
    </div>
  )
}

export default Header;