import React from 'react'
import {Link } from 'react-router-dom';

const JobCard=({job})=> {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <Link to={`/jobs/${job}`}>View details</Link>
    </div>
  )
}
export default JobCard;