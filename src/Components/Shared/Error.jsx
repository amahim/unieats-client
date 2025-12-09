import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex items-center min-h-screen p-8 md:p-16 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      <div className="container relative z-10 flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-2xl text-center glass-effect p-12 rounded-3xl">
          <h2 className="mb-8 font-extrabold text-8xl md:text-9xl bg-gradient-secondary text-transparent bg-clip-text animate-pulse">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-white/80 text-lg">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link
            to="/"
            className="btn btn-gradient-primary rounded-full px-8 py-3 font-semibold text-white shadow-medium hover:shadow-glow-purple transition-all duration-300 inline-block"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
