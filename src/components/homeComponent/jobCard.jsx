import React from 'react'
import {Link } from 'react-router-dom';

const JobCard=({job})=> {
  return (
    <div className='flex flex-col items-center justify-evenly ml-52 mr-52  mt-5 h-96 w-96 transition duration-150 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg animate-pulse '>
        <div className=''>
            <div>
            <h3 className='text-2xl font-bold text-white '>{job.title}</h3>
            </div>
      <div>
        <p className='text-white text-2xl mt-2'>{job.company}</p>
      </div>
      <p className='text-gray-500 mt-4'>{job.location}</p>
      <Link to={`/jobs/${job}` } className='text-blue-500 font-semibold hover:text-red-700 transition-colors duration-300'>View details</Link>
    </div>
    </div>
  )
}
export default JobCard;