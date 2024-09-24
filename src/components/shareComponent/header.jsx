import React from 'react'
import { Link } from 'react-router-dom';

const  Header=()=>{
  return (
    <div className='container  bg-gray-300 mt-4 shadow-md sticky'>
        <div className='logo-container '> 
        <Link to="/">
            <img src="/logo.png" alt="logo" className="logo w-16 h-16 rounded-md flex items-center justify-center" />
          </Link>     
          </div>     

                    <ul className='flex items-center justify-around'>
                    <li className=''><Link to ="/">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
                    <li> <Link to="/candidate-dashboard">Candidate Dashboard</Link></li>

                </ul>
           
      
    </div>
  )
}

export default Header;