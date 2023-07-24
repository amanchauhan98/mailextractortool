import React, { useEffect, useState } from 'react'
import { Menu } from './Menu'
import { NavLink } from 'react-router-dom';
const Home = () => {
    const [text, setText] = useState('');
    const dataToWrite = 'Weelcome To The E-Mail Extractor Tool';

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          if (currentIndex === dataToWrite.length-1) {
            clearInterval(intervalId);
          } else {
            setText(prevText => prevText + dataToWrite[currentIndex]);
            currentIndex++;
          }
        }, 500); // Adjust the interval as per your preference (in milliseconds)
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    return <>
        <Menu />
        <div class="h-fit">
            <div className='text-center overflow-hidden w-full h-fit '>
                <div className='h-[53rem] xl:h-[35em] w-full mx-auto bg-red-300 space-y-4 md:space-y-6 lg:space-y-[2rem]'>
                  <br />
                    <h1 className=' text-[2.5rem] text-white font-serif  w-[16rem] md:text-[3rem] md:w-[26rem] mx-auto lg:text-[4.5rem] lg:w-[35rem] xl:text-[3.3rem] xl:w-[47rem]'>{text}</h1>
                    <br />
                    <br />
                    <p className='text-[3rem] text-white font-serif '>Develop by <span className='text-red-400 hover:text-red-500 duration-500 '>Aman Chauhan</span> </p>
                    <br />
                    <NavLink to={'/email-extract'} ><button className='text-xl font-serif px-10 py-4 text-white bg-gradient-to-r from-red-400 to-pink-400 hover:bg-gradient-to-l hover:bg-transparent  hover:text-red-500 border-[0.01rem] border-white  hover:border-red-500 duration-500 delay-200 overflow-hidden z-10 shadow-xl drop-shadow-2xl'>Get Started</button></NavLink>
                    
                    <div class="custom-shape-divider-bottom-1689752552">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
               

            </div>
        </div>
    </>
}
export default Home;