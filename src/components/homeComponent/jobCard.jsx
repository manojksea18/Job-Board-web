import React from 'react'
import {Link } from 'react-router-dom';

const jobCard=({job})=> {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <link to={`/jobs/${job}`}>View details</link>
    </div>
  )
}
export default jobCard;