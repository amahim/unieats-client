
import Lottie from 'lottie-react';
import LottieBanner from '../../assets/lottie-banner.json'

const Banner = () => {
    return (
       <div className="px-4 md:px-8 mb-16">
            <div className='flex md:justify-around justify-center items-center md:flex-row flex-col w-full max-w-7xl mx-auto rounded-3xl glass-effect border border-white/20 shadow-strong overflow-hidden'>
                <div className='flex flex-col md:flex-row items-center justify-between w-full p-8 md:p-12 lg:p-16 text-center md:text-start gap-8'>
                <div className='md:w-[50%] w-full space-y-4 flex flex-col md:items-start items-center animate-fade-in'>
                    <h1 className='md:text-start text-center text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight'>
                        Fuel Your Day, <br /> 
                        <span className="bg-gradient-to-r from-white to-white/70 text-transparent bg-clip-text">The Easy Way</span>
                    </h1>
                    <p className='text-white/90 text-sm md:text-base leading-relaxed max-w-lg'>
                        Effortlessly plan, track, and manage your daily meals with our platform designed to meet the unique needs of university students
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full md:w-auto mt-2">
                        <input 
                            className='flex-1 sm:w-48 md:w-56 px-4 py-2 text-sm text-white placeholder-white/60 glass-effect border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300' 
                            type="search" 
                            placeholder="Search meals..." 
                        />
                        <button className='btn btn-gradient-primary rounded-full px-5 btn-sm text-white font-medium shadow-medium hover:shadow-glow-purple transition-all duration-300'>
                            Search
                        </button>
                    </div>
                </div>
                <div className='md:w-[50%] w-full flex items-center justify-center'>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
                        <Lottie animationData={LottieBanner} className="h-64 md:h-80 lg:h-96 w-auto relative z-10 animate-float" />
                    </div>
                </div>
                </div>
            </div>
       </div>
    );
};

export default Banner;