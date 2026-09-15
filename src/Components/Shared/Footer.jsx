const Footer = () => {
  return (
    <div className="mt-20 w-full px-4 md:px-8">
      <footer className="bg-slate-950/90 text-slate-300 rounded-3xl p-8 md:p-12 mx-auto max-w-6xl mb-8 border border-slate-800 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
              <span className="text-xl font-bold text-orange-500">
                U
              </span>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">
              Uni<span className="text-orange-500">Eats</span>
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-slate-400">
            <a href="#about" className="hover:text-orange-400 transition-colors">
              About Us
            </a>
            <a href="#meals" className="hover:text-orange-400 transition-colors">
              Meals
            </a>
            <a href="#pricing" className="hover:text-orange-400 transition-colors">
              Pricing Plans
            </a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">
              Contact Support
            </a>
          </nav>
          <div className="flex gap-3">
            <a
              href="https://x.com"
              aria-label="Twitter"
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
          <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} UniEats Platform. All rights reserved.
          </p>
          <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-2 bg-slate-900 p-1.5 rounded-2xl sm:rounded-full border border-slate-800">
              <input
                type="email"
                placeholder="Stay updated with meals..."
                className="flex-1 px-3.5 py-1.5 text-xs md:text-sm text-white placeholder-slate-500 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn-gradient-primary rounded-full px-5 btn-xs md:btn-sm text-white font-semibold"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
