import ProjectCard from '@/components/card'
import React from 'react'

function Project() {
    return (
        <div id='projects' className='flex bg-gray-100 py-40 justify-center items-center'>
            <h2 className='text-3xl text-black font-semibold'>New projects coming soon.. 🤠</h2>
            {/* {
                Array.from({ length: 1 }).map((_, i) => <ProjectCard key={i} />)
            } */}
        </div>
    )
}

export default Project
