const Loading = () => {
    return (
      <div className="flex min-h-screen justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-white/30 border-t-white animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse"></div>
          </div>
          <p className="text-white text-xl font-semibold animate-pulse">Loading...</p>
        </div>
      </div>
    );
  };
  
  export default Loading;