const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-3 border-slate-800 border-t-orange-500 animate-spin"></div>
        <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
          Loading UniEats...
        </p>
      </div>
    </div>
  );
};

export default Loading;
