import '../App.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import { ReactSVG } from 'react-svg'

const Home = () => {
    return (
        <div className='-z-10'>
            <div className='bg-gray-50'>
                <div className='flex gap-32 w-full h-auto px-32 py-32'>
                    <div className=''>
                        <h1 className='text-5xl font-bold pb-6'>React Native Developer</h1>
                        <p className='text-xl text-gray-500'>Hi, I'm Akash. A passionate React Native Developer</p>
                        <p className='text-xl text-gray-500'>Patna, Bihar, India 📍</p>

                        <div className='flex gap-4 mt-8 animate-bounce duration-1000'>
                            <ReactSVG src={linkedin} className='cursor-pointer hover:text-blue-700' />
                            <ReactSVG src={github} className='cursor-pointer hover:text-blue-700' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='hero-img'></div>
                    </div>


                </div>

                <div className='flex gap-8 px-32 items-center'>
                    <span className='text-xl text-gray-500 font-semibold'>Tech Stack |</span>
                    <div className='hover:translate-y-[-10px] duration-500'>
                        <img src="https://skillicons.dev/icons?i=androidstudio,apple" alt="" />
                    </div>
                    <div className='hover:translate-y-[-10px] duration-500'>
                        <img src="https://skillicons.dev/icons?i=react,nextjs" alt="" />
                    </div>
                    <div className='hover:translate-y-[-10px] duration-500'>
                        <img src="https://skillicons.dev/icons?i=javascript,typescript" alt="" />
                    </div>
                    <div className='hover:translate-y-[-10px] duration-500'>
                        <img src="https://skillicons.dev/icons?i=html,css,tailwind" alt="" />
                    </div>
                    <div className='hover:translate-y-[-10px] duration-500'>
                        <img src="https://skillicons.dev/icons?i=android,ios" alt="" />
                    </div>
                </div>
            </div>


            <div id='about' className='bg-white w-full'>
                <div className='flex justify-start px-64 items-center gap-16 pt-32'>
                    <div className='h-[22rem] w-[65rem] justify-center items-center'>
                        <img className=' h-[100%] w-[100%] rounded-xl object-fill' src="https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg" alt="" />
                    </div>
                    <div className='justify-center items-center pt-8'>
                        <p className='text-lg uppercase font-semibold text-blue-600 mb-4'>About me</p>
                        <h2 className='text-[24px] font-bold text-gray-500 mb-6'>React Native Developer <br />Front-end Developer <br /> based in Patna, India 📍</h2>
                        <p className='text-[16px] text-gray-500 mb-6'>Hey, my name is Akash, and I'm a React Native(Mobile App) Developer. My passion is to create and develop a clean UI/UX for my users.</p>
                        <p className='text-[16px] text-gray-500 mb-6'>My main stack currently is ReactNative/ReactJs in combination with Tailwind CSS and TypeScript.</p>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L20,213.3C40,171,80,85,120,80C160,75,200,149,240,186.7C280,224,320,224,360,229.3C400,235,440,245,480,240C520,235,560,213,600,176C640,139,680,85,720,96C760,107,800,181,840,213.3C880,245,920,235,960,240C1000,245,1040,267,1080,266.7C1120,267,1160,245,1200,245.3C1240,245,1280,267,1320,261.3C1360,256,1400,224,1420,208L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Home