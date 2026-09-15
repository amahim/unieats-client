import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
      <section className="">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <SectionTitle
              heading="Choose Your Plan"
              subHeading="Get Extra Benefits"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Silver Plan */}
            <div className="flex flex-col w-full hover-lift h-full">
              <div className="bg-slate-900/90 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl flex flex-col justify-between flex-grow hover:border-slate-700 transition-all duration-300">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Starter</span>
                    <h4 className="text-2xl font-extrabold text-white">Silver</h4>
                    <div className="flex items-baseline gap-2 pt-2">
                      <span className="text-4xl md:text-5xl font-black text-white">
                        $10
                      </span>
                      <span className="text-slate-400 text-sm">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-slate-300 text-sm font-medium pt-2">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Request Regular Meals</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Write Meal Reviews</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to={`dashboard/payment/Silver`}
                    state={{ price: 10 }}
                    className="btn bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl w-full py-3 font-semibold text-center transition-all"
                  >
                    Get Silver
                  </Link>
                </div>
              </div>
            </div>

            {/* Gold Plan (Featured) */}
            <div className="flex flex-col w-full hover-lift relative h-full mt-4 md:mt-0">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-orange-500 px-4 py-1 rounded-full text-white text-xs font-bold shadow-lg tracking-wider uppercase">
                  Most Popular
                </span>
              </div>
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-6 lg:p-8 border-2 border-orange-500/80 shadow-2xl shadow-orange-500/15 flex flex-col justify-between flex-grow">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Pro Student</span>
                    <h4 className="text-2xl font-extrabold text-white">Gold</h4>
                    <div className="flex items-baseline gap-2 pt-2">
                      <span className="text-4xl md:text-5xl font-black text-white">
                        $15
                      </span>
                      <span className="text-slate-400 text-sm">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-slate-300 text-sm font-medium pt-2">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Request Regular Meals</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Priority Meal Serving</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Priority Support 24/7</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to={`dashboard/payment/Gold`}
                    state={{ price: 15 }}
                    className="btn btn-gradient-primary rounded-xl w-full py-3 font-bold text-white shadow-lg shadow-orange-500/25 text-center"
                  >
                    Get Gold
                  </Link>
                </div>
              </div>
            </div>

            {/* Platinum Plan */}
            <div className="flex flex-col w-full hover-lift h-full">
              <div className="bg-slate-900/90 rounded-3xl p-6 lg:p-8 border border-slate-800 shadow-xl flex flex-col justify-between flex-grow hover:border-slate-700 transition-all duration-300">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Unlimited</span>
                    <h4 className="text-2xl font-extrabold text-white">Platinum</h4>
                    <div className="flex items-baseline gap-2 pt-2">
                      <span className="text-4xl md:text-5xl font-black text-white">
                        $20
                      </span>
                      <span className="text-slate-400 text-sm">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-slate-300 text-sm font-medium pt-2">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Unlimited Meal Requests</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>VIP Priority Serving</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Dedicated Account Support</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to={`dashboard/payment/Platinum`}
                    state={{ price: 20 }}
                    className="btn btn-gradient-secondary rounded-xl w-full py-3 font-bold text-white shadow-lg shadow-amber-500/25 text-center"
                  >
                    Get Platinum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
