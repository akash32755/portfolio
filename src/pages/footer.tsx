import React from 'react'
import { ReactSVG } from 'react-svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

function Footer() {
    return (
        <div className='flex bg-[#2d2e32] px-32 py-16 justify-between items-center'>
            <div>
                <p className='text-white text-lg font-semibold'>Copyright &#169; 2024. All rights are reserved</p>
            </div>
            <div className='flex gap-4 text-white'>
                <ReactSVG className='cursor-pointer hover:scale-125 duration-500' src={linkedin}  />
                <ReactSVG className='cursor-pointer hover:scale-125 duration-500' src={github} beforeInjection={(svg) => { svg.setAttribute('class', 'fill: white') }} />
            </div>
        </div>
    )
}

export default Footer
