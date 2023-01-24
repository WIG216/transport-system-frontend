import React from 'react';

export const Stats = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                2K
              </h6>
            </div>
            <p className="mb-2 font-bold md:text-lg">Downloads</p>
            <p className="text-gray-700">
              Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the
              Amazon. They’re very famous and very high-maintenance effort.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                1.3K
              </h6>
            </div>
            <p className="mb-2 font-bold md:text-lg">Subscribers</p>
            <p className="text-gray-700">
              One day, after filming a scene deep in the rainforest, the three
              actors and their agents decide to head back to home base by foot.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                4k
              </h6>
            </div>
            <p className="mb-2 font-bold md:text-lg">Users</p>
            <p className="text-gray-700">
              Suddenly, they come to a large river. On the riverbank, they find a
              small rowboat, but it’s only big enough to hold two of them at one
              time.
            </p>
          </div>
        </div>
      </div>
    );
  };