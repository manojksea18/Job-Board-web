import React from 'react'
import { Link } from 'react-router-dom';

const  Header=()=>{
  return (
    <div className='   bg-gradient-to-r from-black to-gray-400  mt-4  sticky top-0  shadow-lg p-1'>

        <div className='logo-container '> 
        <Link to="/">
            <img src="/logo.png" alt="logo" className="logo w-16 h-16 rounded-md flex items-center justify-center" />
          </Link>     
          </div>     

                    <ul className=' flex items-center justify-center space-x-12 '>
                    <li className=' text-white font-medium hover:text-gray-900 hover:bg-white'><Link to ="/">Home</Link></li>
                    <li className='text-white font-medium hover:text-gray-900'><Link to="/jobs">Jobs</Link></li>
                    <li className='text-white font-medium hover:text-gray-900'><Link to="/employer-dashboard">Employer Dashboard</Link></li>
                    <li className='text-white font-medium hover:text-gray-900'> <Link to="/candidate-dashboard">Candidate Dashboard</Link></li>

                </ul>
           
      
    </div>
  )
}

export default Header;