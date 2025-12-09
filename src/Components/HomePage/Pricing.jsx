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
          <div className="flex flex-wrap items-stretch justify-center gap-6 lg:gap-8">
            <div className="flex w-full md:w-80 lg:w-96 hover-lift">
              <div className="glass-effect flex flex-grow flex-col p-8 space-y-6 rounded-3xl border border-white/20 shadow-strong">
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">Silver</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-white">
                      $10
                    </span>
                    <span className="text-white/60">/month</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 text-white/90">
                  <li className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request Meals</span>
                  </li>
                </ul>
                <Link
                  to={`dashboard/payment/Silver`}
                  state={{ price: 10 }}
                  className="btn btn-gradient-tertiary rounded-full px-6 py-3 font-semibold text-white shadow-medium hover:shadow-glow-blue transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex w-full md:w-80 lg:w-96 hover-lift relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-secondary px-6 py-2 rounded-full text-white text-sm font-semibold shadow-strong">
                  Most Popular
                </span>
              </div>
              <div className="glass-effect flex flex-grow flex-col p-8 space-y-6 rounded-3xl border-2 border-white/40 shadow-glow-purple">
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">Gold</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-white">
                      $15
                    </span>
                    <span className="text-white/60">/month</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 text-white/90">
                  <li className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request Meals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Link
                  to={`dashboard/payment/Gold`}
                  state={{ price: 15 }}
                  className="btn btn-gradient-primary rounded-full px-6 py-3 font-semibold text-white shadow-medium hover:shadow-glow-purple transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex w-full md:w-80 lg:w-96 hover-lift">
              <div className="glass-effect flex flex-grow flex-col p-8 space-y-6 rounded-3xl border border-white/20 shadow-strong">
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">Platinum</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-white">
                      $20
                    </span>
                    <span className="text-white/60">/month</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 text-white/90">
                  <li className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request Meals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited Requests</span>
                  </li>
                </ul>
                <Link
                  to={`dashboard/payment/Platinum`}
                  state={{ price: 20 }}
                  className="btn btn-gradient-secondary rounded-full px-6 py-3 font-semibold text-white shadow-medium hover:shadow-glow-pink transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
