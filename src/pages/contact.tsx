import React from 'react'
import map_icon from '../assets/map_icon.svg'
import email from '../assets/email.svg'
import { ReactSVG } from 'react-svg'
import GoogleMap from '@/components/googlemap'

function Contact() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:akashkumar119911@gmail.com';
    };

    return (
        <React.Fragment>
            <div id='contact' className='bg-white w-full px-32 py-16'>
                <h2 className='text-[18px] font-semibold uppercase text-blue-700'>Contact</h2>
                <p className='py-2 font-bold text-2xl'>Don't be shy! Hit me up! 👇</p>
                <div className='flex gap-8 py-8'>
                    <div className='flex gap-4 items-center'>
                        <ReactSVG className='text-blue-700 bg-white shadow-xl px-2 py-2 rounded-full' src={map_icon} />
                        <div>
                            <h3 className='text-base font-bold text-black'>Location</h3>
                            <p className='text-[16px] text-gray-500 hover:text-blue-700 cursor-pointer' >Patna, India</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <ReactSVG className='text-blue-700 bg-white shadow-xl px-2 py-2 rounded-full' src={email} />
                        <div>
                            <h3 className='text-base font-bold text-black'>Mail</h3>
                            <p className='text-[16px] text-gray-500 hover:text-blue-700 cursor-pointer' onClick={handleEmailClick}>akashkumar119911@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <GoogleMap />
        </React.Fragment>
    )
}

export default Contact