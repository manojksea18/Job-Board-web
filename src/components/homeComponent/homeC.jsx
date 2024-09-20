import React from 'react'
import JobCard from './jobCard'

export default function HomeC() {
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
            featuredJobs.map((job)=>(<JobCard key={job.id} job={job}/>))
        }
    </div>

    </div>
  )
}
