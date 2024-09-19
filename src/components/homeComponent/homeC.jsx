import React from 'react'
import jobCard from './jobCard'

export default function homeC() {
    const featuredJobs=[

        {id:1, title:'Frontend Developer', company:'Tech soln', location:'Dhapasi'},
        {id:2, title:'Backend Developer', company:'Metadata Inc', location:'Dillibazar'},

    ]
  return (
    <div>
    <h1>Welcome to the Job Board</h1>
    <h2>Featured Jobs</h2>
    <div>
        {
            featuredJobs.map((job)=>(<jobCard key={job.id} job={job}/>))
        }
    </div>

    </div>
  )
}
