import React from 'react'
import { Link } from 'react-router-dom';

const  Header=()=>{
  return (
    <div>
        <header>
            <nav>
                <ul className=' flex items-center justify-center'>
                    <li className=''><Link to ="/">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
                    <li><Link to="/candidate-dashboard">Candidate Dashboard</Link></li>

                </ul>
            </nav>
        </header>
      
    </div>
  )
}

export default Header;