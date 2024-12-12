import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center">
      <div className="px-4 lg:py-12">
        <div className="lg:flex lg:gap-4">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="text-9xl font-bold text-[#149eca]">404</h1>
            <p className="mb-2 text-center text-2xl font-bold md:text-3xl">
              <span className="text-red-500">Oops!</span>{" "}
              <span>Page not found</span>
            </p>
            <p className="mb-8 text-center md:text-lg">
              The page you're looking for doesn't exist.
            </p>
            <Link
              to={"/"}
              className="inline-block rounded-md bg-[#149eca] p-2 hover:!text-white"
              reloadDocument
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
