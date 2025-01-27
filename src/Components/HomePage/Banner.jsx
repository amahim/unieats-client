
import Lottie from 'lottie-react';
import LottieBanner from '../../assets/lottie-banner.json'

const Banner = () => {
    return (
       <div>
            <div className='flex md:justify-around justify-center items-center md:flex-row  flex-col w-4/5 mx-auto rounded-2xl  bg-gradient-to-r from-[#ee6352] to-[#F15B42] ... md:pt-0 pt-10'>
                <div className='flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto text-center md:text-start'>
                <div className='md:w-[50%] w-full space-y-5 flex flex-col md:items-start items-center'>
                    <p className='md:text-start text-center text-2xl md:text-3xl lg:text-4xl text-white font-bold'>Fuel Your Day, <br /> The Easy Way</p>
                    <p className='text-[#dadada]'>
                    Effortlessly plan, track, and manage your daily meals with our platform designed to meet the unique needs of university students
                    </p>
                    <div className="flex gap-2 items-center ">
                        <input className='w-[150px] md:w-full px-2 text-white border-b-4 py-2 bg-[#ee6352]' type="search" placeholder="Search" />
                        <button className=' btn rounded-none'>Search</button>
                    </div>
                </div>
                <div className='md:w-[50%] w-full' >
                    <Lottie animationData={LottieBanner} className="h-64 md:h-92 lg:h-96" ></Lottie>
                </div>
                </div>
            </div>
       </div>
    );
};

export default Banner;