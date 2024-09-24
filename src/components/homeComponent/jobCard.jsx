import React from 'react'
import {Link } from 'react-router-dom';

const JobCard=({job})=> {
  return (
    <div className='flex flex-col justify-evenly shadow-md rounded-md h-64 w-64 bg-red-100 mt-10transition duration-150 ease-in-out '>
        <div className=''>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <Link to={`/jobs/${job}`}>View details</Link>
    </div>
    </div>
  )
}
export default JobCard;