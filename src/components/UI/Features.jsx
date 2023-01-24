import React from 'react';

export const Feature = (props) => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-extrabold leading-none">
              Ride With Us
            </h5>
            <p className="mb-6 text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
              omnis iste natus.
            </p>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Book A Ride
              </button>
            </div>
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">First Step</h6>
              <p className="text-sm text-gray-700">
                A flower in my garden, a mystery in my panties. Heart attack never
                stopped old Big Bear. I didn't even know we were calling him Big
                Bear.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Second Step</h6>
              <p className="text-sm text-gray-700">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod. Yellow-and-black
                triplefin.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Third Step</h6>
              <p className="text-sm text-gray-700">
                Fourth Step. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                Hercules.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Fourth Step</h6>
              <p className="text-sm text-gray-700">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling. Inspiring, invest
                synergy capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };