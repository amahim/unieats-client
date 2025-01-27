import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="w-4/5 mx-auto pt-10">
      <section className="">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <SectionTitle
              heading="Choose Your Plan"
              subHeading="Get Extra Benefits"
            />
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Silver</h4>
                  <span className="text-6xl font-bold">10$</span>
                </div>

                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#f15b42"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request</span>
                  </li>
                </ul>
                <Link
                  to={`dashboard/payment/Silver`}
                  state={{ price: 10 }}
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded  text-white bg-[#f15b42]"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Gold</h4>
                  <span className="text-6xl font-bold">15$</span>
                </div>

                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#f15b42"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#f15b42"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request</span>
                  </li>
                </ul>
                <Link
                  to={`dashboard/payment/Gold`}
                  state={{ price: 15 }}
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded text-white bg-[#f15b42]"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Platinum</h4>
                  <span className="text-6xl font-bold">20$</span>
                </div>

                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#f15b42"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#f15b42"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#f15b42"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>You can Request</span>
                  </li>
                </ul>
                <Link
                  to={`dashboard/payment/Platinum`}
                  state={{ price: 20 }}
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded text-white bg-[#f15b42]"
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
