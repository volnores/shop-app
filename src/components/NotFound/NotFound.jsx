import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  //min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8
  return (
    <div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-52 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-bold text-orange-600">404</p>
        <div className="mt-8 text-6xl font-bold tracking-tight text-orange-800/90 ">
          NotFound
        </div>
        <p className="mt-6 text-lg leading-6 text-orange-700 ">
          Sorry, such page does not exist
        </p>
        <div className="mt-10">
          <Link
            to={"/"}
            className="rounded-lg bg-orange-800/50 text-white px-3.5 py-2.5 text-base shadow-md hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition ease-in-out delay-50"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
