import Lottie from "lottie-react";
import LottieBanner from "../../assets/lottie-banner.json";

const Banner = () => {
  return (
    <div className="px-4 md:px-8 mb-16">
      <div className="flex md:justify-around justify-center items-center md:flex-row flex-col w-full max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 md:p-12 lg:p-16 text-center md:text-start gap-8 relative z-10">
          <div className="md:w-[52%] w-full space-y-4 flex flex-col md:items-start items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold">
              <span>🍲</span>
              <span>University Dining Reimagined</span>
            </div>
            <h1 className="md:text-start text-center text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight">
              Fuel Your Campus Life, <br />
              <span className="text-orange-500">
                Fresh & Effortless
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
              Effortlessly plan, track, and request your daily meals with our
              crafted platform tailored specifically for university students.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full md:w-auto mt-3 bg-slate-950/90 p-1.5 rounded-2xl sm:rounded-full border border-slate-700/80 shadow-inner">
              <input
                className="flex-1 sm:w-60 md:w-64 px-4 py-2 text-sm text-white placeholder-slate-400 bg-transparent focus:outline-none"
                type="search"
                placeholder="Search breakfast, lunch, dinner..."
              />
              <button className="btn btn-gradient-primary rounded-full px-6 btn-sm text-white font-semibold shadow-md">
                Search
              </button>
            </div>
          </div>
          <div className="md:w-[48%] w-full flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/15 blur-3xl rounded-full"></div>
              <Lottie
                animationData={LottieBanner}
                className="h-64 md:h-80 lg:h-96 w-auto relative z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
