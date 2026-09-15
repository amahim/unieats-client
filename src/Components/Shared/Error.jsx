import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex items-center min-h-screen p-6 md:p-16 relative overflow-hidden bg-slate-950">
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 mx-auto my-8">
        <div className="max-w-xl text-center bg-slate-900/95 border border-slate-800 shadow-2xl p-8 md:p-12 rounded-3xl">
          <h2 className="mb-4 font-black text-7xl md:text-9xl text-orange-500 tracking-tight">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Page Not Found
          </p>
          <p className="mt-2 mb-8 text-slate-400 text-sm md:text-base leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          <Link
            to="/"
            className="btn btn-gradient-primary rounded-xl px-8 py-3 font-bold text-white shadow-lg shadow-orange-500/20 inline-block"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
