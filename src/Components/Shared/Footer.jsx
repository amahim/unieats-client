const Footer = () => {
  return (
    <div className="mt-20 w-full overflow-hidden">
      <footer className="glass-effect text-white footer footer-center rounded-3xl p-6 md:p-10 mx-auto max-w-6xl mb-8 border border-white/20">
        <nav className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-primary text-transparent bg-clip-text">
                U
              </span>
            </div>
            <p className="text-xl md:text-2xl font-bold bg-white text-transparent bg-clip-text">
              UniEats
            </p>
          </div>
          <div className="flex text-sm md:text-base flex-row gap-4 md:gap-6 text-white/90">
            <a className="link link-hover hover:text-white transition-all duration-300 hover:scale-110">
              Contact
            </a>
            <a className="link link-hover hover:text-white transition-all duration-300 hover:scale-110">
              Jobs
            </a>
            <a className="link link-hover hover:text-white transition-all duration-300 hover:scale-110">
              Press kit
            </a>
          </div>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-3 md:gap-4">
            <a
              href="https://x.com"
              className="hover:scale-110 transition-transform duration-300 p-2 rounded-full hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="hover:scale-110 transition-transform duration-300 p-2 rounded-full hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              className="hover:scale-110 transition-transform duration-300 p-2 rounded-full hover:bg-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside className="space-y-4">
          <p className="text-white/80 text-xs md:text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            UniEats
          </p>
          <form className="w-full max-w-sm mx-auto">
            <h6 className="text-sm md:text-base font-semibold text-white mb-3">
              Stay Updated
            </h6>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm rounded-full glass-effect border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="btn btn-gradient-primary rounded-full px-4 py-2 btn-sm text-white font-medium shadow-medium hover:shadow-glow-purple transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
