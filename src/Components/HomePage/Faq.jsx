import SectionTitle from "../SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16">
      <section>
        <div className="container flex flex-col justify-center mx-auto">
          <div className="flex justify-center">
            <SectionTitle
              subHeading="Answering your questions"
              heading="Frequently Asked Questions"
            />
          </div>

          <div className="flex flex-col gap-3.5 mt-8">
            <details className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-md overflow-hidden group transition-all">
              <summary className="py-4 px-6 outline-none cursor-pointer text-white font-bold text-base md:text-lg hover:bg-slate-800/40 transition-colors list-none flex items-center justify-between">
                <span>How does the meal management platform work?</span>
                <span className="text-orange-400 transform group-open:rotate-180 transition-transform duration-300 text-sm">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Our platform allows university students to plan, track, and
                  manage their daily meals efficiently. You can set meal
                  preferences, track nutrition, and request delicious meals tailored
                  for college life.
                </p>
              </div>
            </details>
            <details className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-md overflow-hidden group transition-all">
              <summary className="py-4 px-6 outline-none cursor-pointer text-white font-bold text-base md:text-lg hover:bg-slate-800/40 transition-colors list-none flex items-center justify-between">
                <span>Is the platform free to use?</span>
                <span className="text-orange-400 transform group-open:rotate-180 transition-transform duration-300 text-sm">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Our basic meal browsing features are free for all students. We
                  offer premium student subscription tiers (Silver, Gold, Platinum)
                  for requesting daily meal packages and priority dining support.
                </p>
              </div>
            </details>
            <details className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-md overflow-hidden group transition-all">
              <summary className="py-4 px-6 outline-none cursor-pointer text-white font-bold text-base md:text-lg hover:bg-slate-800/40 transition-colors list-none flex items-center justify-between">
                <span>Can I customize my meal preferences?</span>
                <span className="text-orange-400 transform group-open:rotate-180 transition-transform duration-300 text-sm">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  Yes, you can filter meals by categories (Breakfast, Lunch, Dinner),
                  sort by price and rating, and view detailed ingredients to suit
                  your dietary requirements.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
