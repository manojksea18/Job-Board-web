import React from 'react'
import JobCard from './jobCard'

export default function HomeC() {
    const featuredJobs=[

        {id:1, title:'Frontend Developer ⌨', company:'Tech soln', location:'Dhapasi'},
        {id:2, title:'Backend Developer ⌨', company:'Metadata Inc', location:'Dillibazar'},

    ]
  return (
    <div className='relative w-full h-full overflow-hidden'>
        <video className=" h-full w-full object-cover" autoPlay muted loop>
        <source src='/9665235-hd_1920_1080_25fps.mp4' type='video/mp4'/>
        </video>


        <div className='absolute inset-0 max-w-7xl mx-auto'>
    <h1 className='flex justify-center font-bold opacity-75 text-white bg-clip-text mt-5 hover:text-orange-800 transition duration-100 text-2xl
 animate-pulse
'>  👋 Welcome to the Job Board</h1>
    <h2 className='flex justify-center font-bold mt-3 text-green-700 text-2xl animate-bounce '>Featured Jobs</h2>
    <div className='flex items-center justify-center mt-10 '>
        <img src='/Front-end.webp' alt='img' className='rounded-md h-72 w-96 ring-4 ring-gray-600 hover:scale-110 duration-300  '  />
    </div>
    <div className='grid gird-cols-1 md:grid-cols-2 '>
        {
            featuredJobs.map((job)=>(<JobCard key={job.id} job={job}/>))
        }
    </div>
    
    </div>
    </div>
  )
}
