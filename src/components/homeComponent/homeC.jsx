import React from 'react'
import JobCard from './jobCard'

export default function HomeC() {
    const featuredJobs=[

        {id:1, title:'Frontend Developer', company:'Tech soln', location:'Dhapasi'},
        {id:2, title:'Backend Developer', company:'Metadata Inc', location:'Dillibazar'},

    ]
  return (
    <div className=' bg-gradient-to-r from-indigo-200 to-gray-200 min-h-screen p-8 mt-4'>
        <div className='max-w-7xl mx-auto'>
    <h1 className='flex justify-center font-bold text-2xl bg-gradient-to-r from-purple-400  to-red-500 bg-clip-text mt-2 hover:text-orange-500 transition duration-300
 animate-pulse
'>  👋 Welcome to the Job Board</h1>
    <h2 className='flex justify-center font-semibold mt-3 text-2xl animate-bounce'>Featured Jobs</h2>
    <div className='grid gird-cols-1 md:grid-cols-2 '>
        {
            featuredJobs.map((job)=>(<JobCard key={job.id} job={job}/>))
        }
    </div>
    </div>
    </div>
  )
}
